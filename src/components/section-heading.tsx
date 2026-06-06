export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 text-xl font-semibold tracking-[0.12em] text-muted uppercase md:text-2xl">
      {children}
    </h2>
  );
}
