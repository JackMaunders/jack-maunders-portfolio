// Ambient node / network graph for the hero background
type Node = { cx: number; cy: number; r: number; accent?: boolean };

const VIEW_W = 1200;
const VIEW_H = 600;

// Small deterministic PRNG (mulberry32)
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGraph() {
  const rand = makeRng(1);
  const columnSpacing = 185;
  const jitter = 25;
  const rowYs = [52, 176, 300, 424, 548];
  const edgeMargin = 18;
  const connectDist = 270 ** 2;

  // Nodes run slightly past the left/right edges so the mesh bleeds off-screen,
  // but cy is clamped so the top/bottom stays clear of the crop.
  const nodes: Node[] = [];
  rowYs.forEach((y, r) => {
    const offset = (r % 2) * (columnSpacing / 2);
    for (let x = offset - 40; x < VIEW_W + 80; x += columnSpacing) {
      const cy = y + (rand() - 0.5) * 2 * jitter;
      nodes.push({
        cx: Math.round(x + (rand() - 0.5) * 2 * jitter),
        cy: Math.round(Math.min(VIEW_H - edgeMargin, Math.max(edgeMargin, cy))),
        r: rand() > 0.5 ? 6 : 5,
      });
    }
  });

  // Promote the nodes nearest these points to accents. Top-centre + bottom-
  // centre stay in frame on mobile (which only shows the centre band)
  const accentTargets: [number, number][] = [
    [600, 50], // top-centre (mobile)
    [620, 560], // bottom-centre (mobile)
    [210, 180], // upper-left
    [1040, 130], // upper-right
    [300, 510], // lower-left
    [1010, 380], // mid-right
  ];
  for (const [tx, ty] of accentTargets) {
    let best = -1;
    let bestD = Infinity;
    nodes.forEach((n, i) => {
      if (n.accent) return;
      const d = (n.cx - tx) ** 2 + (n.cy - ty) ** 2;
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    if (best >= 0) {
      nodes[best].accent = true;
      nodes[best].r = 7;
    }
  }

  // Connect every pair within the threshold for an even local mesh.
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = (nodes[i].cx - nodes[j].cx) ** 2 + (nodes[i].cy - nodes[j].cy) ** 2;
      if (d < connectDist) edges.push([i, j]);
    }
  }

  return { nodes, edges };
}

const { nodes, edges } = buildGraph();

export function NodeGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden
      className={`h-full w-full ${className}`.trim()}
    >
      {/* Edges */}
      <g className="text-foreground/10" stroke="currentColor" strokeWidth={1.25}>
        {edges.map(([a, b], i) => (
          <line
            key={i}
            className="edge"
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      {/* Halo rings around accent nodes */}
      <g className="text-accent/25" stroke="currentColor" strokeWidth={1}>
        {nodes.map((n, i) =>
          n.accent ? (
            <circle
              key={i}
              className="halo"
              cx={n.cx}
              cy={n.cy}
              r={n.r + 8}
              vectorEffect="non-scaling-stroke"
            />
          ) : null
        )}
      </g>

      {/* Nodes */}
      <g>
        {nodes.map((n, i) => (
          <circle
            key={i}
            className={`node ${n.accent ? "text-accent" : "text-foreground/30"}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="currentColor"
          />
        ))}
      </g>
    </svg>
  );
}
