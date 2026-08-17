import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700",
        className
      )}
      {...props}
    />
  );
}