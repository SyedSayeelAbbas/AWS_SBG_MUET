import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[150px] w-full rounded-xl border border-line bg-white p-4 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";