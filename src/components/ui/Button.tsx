import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
}

const variants = {
  primary: `
    relative
    overflow-hidden
    text-white
    bg-[linear-gradient(135deg,#7c3aed,#8c52ff,#6b46c1,#7c3aed)]
    bg-[length:250%_250%]
    animate-buttonGradient
    shadow-[0_10px_25px_rgba(124,58,237,.30)]
    sm:shadow-[0_15px_35px_rgba(124,58,237,.30)]
    hover:shadow-[0_20px_40px_rgba(124,58,237,.45)]
    sm:hover:shadow-[0_25px_55px_rgba(124,58,237,.45)]
    hover:-translate-y-1
  `,

  secondary: `
    relative
    overflow-hidden
    border
    border-white/50
    bg-white/65
    backdrop-blur-xl
    text-body
    shadow-md
    sm:shadow-lg
    hover:bg-white/80
    hover:-translate-y-1
    hover:shadow-xl
  `,

  ghost: `
    bg-transparent
    hover:bg-brand-50
  `,
};

/*
  Sizes now scale down on mobile: shorter height, tighter horizontal
  padding, smaller font and gap so buttons don't look oversized or
  force overflow on narrow screens. From `sm` up they expand to the
  original desktop dimensions.
*/
const sizes = {
  sm: "h-9 px-3.5 text-xs gap-1.5 sm:h-10 sm:px-4 sm:text-sm sm:gap-2",
  md: "h-10 px-4 text-sm gap-1.5 sm:h-12 sm:px-6 sm:text-base sm:gap-2",
  lg: "h-11 px-5 text-sm gap-2 sm:h-14 sm:px-8 sm:text-base",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      showArrow = false,
      children,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={cn(
        `
          group
          relative
          inline-flex
          w-full
          sm:w-auto
          items-center
          justify-center
          rounded-full
          font-semibold
          leading-none
          whitespace-nowrap
          transition-all
          duration-300
          active:scale-95
        `,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Animated shine */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition
          duration-700
          group-hover:opacity-100
        "
      >
        <span
          className="
            absolute
            -left-32
            top-0
            h-full
            w-24
            -skew-x-12
            bg-white/30
            blur-md
            group-hover:left-[120%]
            transition-all
            duration-1000
          "
        />
      </span>

      <span className="relative flex items-center">
        {children}

        {showArrow && (
          <ArrowRight
            size={16}
            className="
              ml-1.5
              sm:ml-2
              shrink-0
              transition-all
              duration-300
              group-hover:translate-x-2
              sm:w-[18px]
              sm:h-[18px]
            "
          />
        )}
      </span>
    </button>
  )
);

Button.displayName = "Button";