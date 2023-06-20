import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TesteImage from "../../assets/abraco.png";
import ImagemBannerMain from "../../assets/bannerMain.png";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

export function Animation() {
  const triggerRef = useRef(null);
  const triggeredElementRef = useRef(null);
  const triggerRef2 = useRef(null);
  const triggeredElementRef2 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(triggeredElementRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        pin: true,
        scrub: true,
        end: 300,
      },
      opacity: 0,
    });
    gsap.from(triggeredElementRef2.current, {
      scrollTrigger: {
        trigger: triggerRef2.current,
        start: "top top",
        pin: true,
        scrub: true,
        end: 300,
      },
      opacity: 0,
    });
  });

  return (
    <div className="banner-main relative h-fit">
      <div ref={triggerRef}>
        <Image ref={triggeredElementRef} src={TesteImage} alt="" className="w-full" />
      </div>
      <div ref={triggerRef2} className="absolute top-0 w-full">
        <Image ref={triggeredElementRef2} src={ImagemBannerMain} alt="" className="w-full"/>
      </div>
    </div>
  );
}
