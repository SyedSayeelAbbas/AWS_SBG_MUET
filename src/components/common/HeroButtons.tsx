import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "../ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <Button
        size="lg"
        className="
          group
          rounded-2xl
          bg-gradient-to-r
          from-brand-600
          via-brand-600
          to-brand-500
          shadow-xl
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        Join Community

        <ArrowRight
          className="
            ml-2
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
          size={18}
        />
      </Button>

      <Button
        size="lg"
        variant="secondary"
        className="
          group
          rounded-2xl
          border-white/40
          bg-white/60
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
        "
      >
        <PlayCircle
          size={18}
          className="
            mr-2
            transition-transform
            duration-500
            group-hover:rotate-180
          "
        />

        Explore Events
      </Button>
    </div>
  );
}