// OVERHAUL START
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  // Inherit root layout (Header/Footer live there). Keep group-specific wrappers optional.
  return <>{children}</>;
}
// OVERHAUL END
