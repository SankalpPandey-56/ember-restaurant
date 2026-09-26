import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = "EMBER — Contemporary fire-grilled restaurant in Pune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded Open Graph card rendered at build time for every route. */
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
          backgroundColor: "#131009",
          color: "#f2ebdd",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 1, backgroundColor: "#c98a4b" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#c98a4b",
            }}
          >
            Koregaon Park, Pune
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 148,
              lineHeight: 1,
              letterSpacing: 24,
              fontWeight: 500,
            }}
          >
            EMBER
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              color: "#a39885",
              maxWidth: 900,
            }}
          >
            Fire, flavor, and everything between.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#a39885",
            borderTop: "1px solid #2b2519",
            paddingTop: 28,
          }}
        >
          <div>{site.url.replace("https://", "")}</div>
          <div>Open all week · Lunch &amp; dinner</div>
        </div>
      </div>
    ),
    size,
  );
}
