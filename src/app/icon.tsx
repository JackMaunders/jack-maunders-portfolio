import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// next/og can't read woff2, so load ttf
const cabinetBold = readFileSync(
  join(process.cwd(), "src/fonts/CabinetGrotesk-Bold.ttf")
);

// "jm" monogram favicon with an amber node dot — matches the header logo.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "#0a0a0a",
          fontWeight: 700,
          fontFamily: "Cabinet Grotesk",
          paddingBottom: 14,
        }}
      >
        <span
          style={{
            fontSize: 34,
            color: "#f4f4f4",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          jm
        </span>
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#f5973a",
            marginLeft: 3,
          }}
        />
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
      ],
    }
  );
}
