/** "open to work" pill with a pulsing live dot */
export function AvailabilityBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge-avail">
      <span className="dot-live" />
      {children}
    </span>
  );
}
