import { ImageResponse } from "next/og";
import { data } from "@/lib/data";

/* Real OG image (1200×630), auto-built from name + role — SEO checklist.
   Next wires this to og:image / twitter:image automatically. */
export const runtime = "edge";
export const alt = "Adawiyyah Latifah — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#faf6f7",
          color: "#2b2140",
          position: "relative",
        }}
      >
        {/* pastel blobs */}
        <div style={{ position: "absolute", top: -120, left: -120, width: 460, height: 460, borderRadius: "50%", background: "#ffc6df", opacity: 0.65 }} />
        <div style={{ position: "absolute", bottom: -160, right: -120, width: 460, height: 460, borderRadius: "50%", background: "#c3e2ff", opacity: 0.6 }} />
        <div style={{ position: "absolute", top: 120, right: -80, width: 320, height: 320, borderRadius: "50%", background: "#ffe9a0", opacity: 0.55 }} />

        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#6f6685",
          }}
        >
          ✦ {data.person.role}
        </div>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 800, lineHeight: 1.04, marginTop: 24, letterSpacing: "-0.02em" }}>
          {data.person.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#6f6685", marginTop: 28, maxWidth: 880 }}>
          {data.person.tagline}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
          {data.heroStack.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                padding: "10px 22px",
                borderRadius: 999,
                border: "3px solid #2b2140",
                background: "#ffffff",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
