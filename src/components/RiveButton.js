"use client";

import { useCallback, useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export default function RiveButton() {
  const [isActive, setIsActive] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: "/hero_use_case.riv",
    artboard: "Button",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const isHoverInput = useStateMachineInput(rive, "State Machine 1", "isHover");

  const onButtonActivate = useCallback(() => {
    if (isHoverInput) {
      isHoverInput.value = true;
      setIsActive(true);
    }
  }, [isHoverInput]);

  const onButtonDeactivate = useCallback(() => {
    if (isHoverInput) {
      isHoverInput.value = false;
      setIsActive(false);
    }
  }, [isHoverInput]);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl px-4">
      <h1 className="text-white font-bold text-3xl lg:text-5xl pb-6 uppercase leading-tight">
        Welcome to the world of gamified Learning with <br className="hidden md:block" />
        Think Again Academy
      </h1>
      
      <div className="relative w-full md:w-3/4 mx-auto h-20 md:h-24 lg:h-32">
        <div className="absolute inset-0">
          <RiveComponent aria-hidden="true" />
          
          <a
            href="/Masterclass/GeoAI"
            aria-label="Start now and explore GeoAI masterclass"
            className={`absolute inset-0 flex items-center justify-center text-white text-lg lg:text-xl font-medium 
              ${isActive ? 'scale-105' : 'scale-100'} transition-transform duration-200`}
            onMouseEnter={onButtonActivate}
            onMouseLeave={onButtonDeactivate}
            onFocus={onButtonActivate}
            onBlur={onButtonDeactivate}
            onTouchStart={onButtonActivate}
            onTouchEnd={onButtonDeactivate}
            role="button"
          >
            START NOW
          </a>
        </div>
      </div>
    </div>
  );
}