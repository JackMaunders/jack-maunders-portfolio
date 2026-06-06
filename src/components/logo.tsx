// "JM" monogram with an amber node dot
export function Logo() {
  return (
    <span className="inline-flex items-end font-display text-xl font-bold lowercase tracking-tight text-foreground">
      jm
      <span
        aria-hidden
        className="mb-[0.2em] ml-[0.13em] h-[0.3em] w-[0.3em] rounded-full bg-accent"
      />
    </span>
  );
}
