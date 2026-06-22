import { ImageSlot } from "../atoms/ImageSlot";

/** browser-chrome mockup framing a product screenshot */
export function BrowserMockup({
  url,
  shotId,
  alt,
  src,
}: {
  url: string;
  shotId: string;
  alt: string;
  src?: string;
}) {
  return (
    <>
      <div className="browser__bar">
        <div className="browser__dots">
          <i style={{ background: "#ff6f6f" }} />
          <i style={{ background: "#ffd24a" }} />
          <i style={{ background: "#5fcf95" }} />
        </div>
        <span className="browser__url">{url}</span>
      </div>
      <div className="browser__shot ph-stripe" style={{ aspectRatio: "16/10" }} id={shotId}>
        <ImageSlot alt={alt} src={src} />
      </div>
    </>
  );
}
