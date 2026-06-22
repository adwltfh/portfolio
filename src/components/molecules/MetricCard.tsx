/** single case-study impact metric (big value + mono label) */
export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="cs-metric">
      <span className="cs-metric__v">{value}</span>
      <span className="cs-metric__k">{label}</span>
    </div>
  );
}
