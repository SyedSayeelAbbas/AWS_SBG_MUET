import { Link } from "react-router-dom";
import awsLogo from "../../assets/aws-sbg-logo.png";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="AWS Student Builder Group MUET - Home"
      className="
        group
        flex
        shrink-0
        items-center
        gap-3
      "
    >
      {/* Logo */}
      <div
        className="
          relative
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border
          border-[#E9D5FF]
          bg-white
          shadow-[0_8px_25px_rgba(140,82,255,0.12)]
          transition-all
          duration-300
          ease-out
          group-hover:-translate-y-0.5
          group-hover:scale-105
          group-hover:border-[#C4B5FD]
          group-hover:shadow-[0_12px_35px_rgba(140,82,255,0.24)]
        "
      >
        {/* Subtle glow */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            bg-[#8C52FF]/[0.04]
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        <img
          src={awsLogo}
          alt="AWS Student Builder Group MUET"
          className="
            relative
            z-10
            h-9
            w-9
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Brand text */}
      <div className="min-w-0 leading-tight">
        <h1
          className="
            truncate
            text-sm
            font-bold
            tracking-tight
            text-[#1F2937]
            transition-colors
            duration-300
            group-hover:text-[#6B46C1]
            sm:text-base
          "
        >
          AWS Student Builder Group
        </h1>

        <p
          className="
            mt-0.5
            text-[11px]
            font-medium
            text-[#8C52FF]
            transition-colors
            duration-300
            group-hover:text-[#6B46C1]
            sm:text-xs
          "
        >
          MUET Jamshoro
        </p>
      </div>
    </Link>
  );
}