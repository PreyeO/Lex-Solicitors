import { CTAButton } from "@/components/common/CTAButton";
import { Logo } from "@/components/common/Logo";

/** On-brand 404 page. */
export default function NotFound() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center focus:outline-none"
    >
      <Logo />
      <div className="flex flex-col items-center gap-3">
        <p className="font-display text-6xl font-semibold text-ink">404</p>
        <span aria-hidden className="h-px w-10 bg-accent" />
        <h1 className="font-display text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="max-w-md text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved.
        </p>
      </div>
      <CTAButton href="/" variant="primary" size="md">
        Return home
      </CTAButton>
    </main>
  );
}
