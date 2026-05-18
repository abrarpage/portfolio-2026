"use client";

import FadeIn from "./FadeIn";
import { TiltCard } from "@/components/ui/tilt-card";

export default function HeroPortrait() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px]  aspect-9/16 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
      <FadeIn delay={0.6} y={30} className="h-full">
        <TiltCard
          tiltLimit={12}
          scale={1.02}
          effect="gravitate"
          spotlight
          className="h-full w-full overflow-hidden"
        >
          <img
            src="/image-me.png"
            alt="Hero portrait"
            className="h-full w-full object-cover"
          />
        </TiltCard>
      </FadeIn>
    </div>
  );
}
