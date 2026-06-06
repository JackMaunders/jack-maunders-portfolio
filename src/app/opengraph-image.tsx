import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og can't read woff2, so load ttf
const cabinetBold = readFileSync(
  join(process.cwd(), "src/fonts/CabinetGrotesk-Bold.ttf")
);
const generalSemibold = readFileSync(
  join(process.cwd(), "src/fonts/GeneralSans-Semibold.ttf")
);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f4f4f4",
          padding: "80px",
          fontFamily: "General Sans",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: 64, height: 6, background: "#f5973a" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Cabinet Grotesk",
              fontSize: 110,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 36,
              fontWeight: 600,
              color: "#8c8c8c",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {site.role}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cabinet Grotesk",
          data: cabinetBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "General Sans",
          data: generalSemibold,
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
}
