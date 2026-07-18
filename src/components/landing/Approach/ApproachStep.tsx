import { cn } from "@/lib/utils";
import type { ApproachStep as ApproachStepData } from "@/types";

export interface ApproachStepProps {
  step: ApproachStepData;
  /** Hides the trailing connector on the final step. */
  isLast: boolean;
}

/**
 * One step in the approach timeline. The marker rail is a vertical column on
 * mobile (node + downward connector) and a horizontal row on desktop (node +
 * rightward connector). The connector is decorative and never dangles past the
 * last step.
 */
export function ApproachStep({ step, isLast }: ApproachStepProps) {
  return (
    <li className="flex gap-5 lg:flex-col lg:gap-0">
      <div className="flex flex-col items-center lg:w-full lg:flex-row lg:items-center">
        <span
          aria-hidden
          className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-accent ring-1 ring-accent/30"
        >
          {String(step.number).padStart(2, "0")}
        </span>
        {!isLast ? (
          <span
            aria-hidden
            className={cn(
              "my-2 w-px flex-1 bg-accent/30",
              "lg:my-0 lg:ml-3 lg:h-px lg:w-auto",
            )}
          />
        ) : null}
      </div>

      <div className="pb-8 lg:pt-6 lg:pr-6 lg:pb-0">
        <h3 className="font-display text-xl font-semibold text-ink">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {step.description}
        </p>
      </div>
    </li>
  );
}
