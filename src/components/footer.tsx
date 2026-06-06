import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted">
        <span>
          &copy; {new Date().getFullYear()} {site.name}
        </span>
      </div>
    </footer>
  );
}
