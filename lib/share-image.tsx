import { ImageResponse } from "next/og";
import { company, serviceArea } from "@/lib/site";

export const shareImageSize = { width: 1200, height: 630 };
export const shareImageContentType = "image/png";
export const shareImageAlt = `${company.name}. Grounds, janitorial, and facilities support. ${serviceArea}.`;

export function shareImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#152c38",
        color: "#f7f8f4",
        padding: "72px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: "0.16em",
          color: "#d7e4ce",
        }}
      >
        IRONWOOD SUPPORT SERVICES
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: 980,
          }}
        >
          Grounds, janitorial, and facilities support.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#d7e4ce",
          }}
        >
          {serviceArea}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#f7f8f4" }}>
        ironwoodsupportservices.com
      </div>
    </div>,
    { ...shareImageSize },
  );
}
