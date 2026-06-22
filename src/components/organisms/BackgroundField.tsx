/** contained pastel blob wash behind the page (loudness set via data-bg on <html>) */
export function BackgroundField() {
  return (
    <div className="bg-field" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <span className="blob b4" />
    </div>
  );
}
