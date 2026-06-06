type Node = { cx: number; cy: number; r: number; accent?: boolean };

const nodes: Node[] = [
  { cx: 60, cy: 44, r: 4 },
  { cx: 168, cy: 72, r: 5 },
  { cx: 292, cy: 52, r: 4 },
  { cx: 112, cy: 150, r: 4 },
  { cx: 224, cy: 162, r: 6, accent: true },
  { cx: 312, cy: 184, r: 4 },
  { cx: 52, cy: 246, r: 4 },
  { cx: 176, cy: 262, r: 5 },
  { cx: 286, cy: 298, r: 4 },
  { cx: 136, cy: 338, r: 5, accent: true },
];

// Pairs of node indices to connect with an edge.
const edges: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 5],
  [3, 4], [4, 5], [3, 6], [4, 7], [5, 8], [6, 7],
  [7, 8], [7, 9], [8, 9], [3, 7],
];

// Decorative node / network graph for the hero background
export function NodeGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      aria-hidden
      className={className}
    >
      {/* Edges */}
      <g className="text-foreground/15" stroke="currentColor" strokeWidth={1.25}>
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
      <g className="text-accent/30" stroke="currentColor" strokeWidth={1}>
        {nodes.map((n, i) =>
          n.accent ? (
            <circle
              key={i}
              className="halo"
              cx={n.cx}
              cy={n.cy}
              r={n.r + 6}
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
            className={`node ${n.accent ? "text-accent" : "text-foreground/40"}`}
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
