import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImagemTesteMobile from "../../assets/abracoMobile.png";
import ImagemBannerMobile from "../../assets/mainBannerMobile.png";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

export function AnimationMobile() {
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
        end: 850,
      },
      opacity: 0,
    });
    gsap.from(triggeredElementRef2.current, {
      scrollTrigger: {
        trigger: triggerRef2.current,
        start: "top top",
        pin: true,
        scrub: true,
        end: 800,
      },
      opacity: 0,
    });
  });

  return (
    <div className="banner-main relative">
      <div ref={triggerRef}>
        <Image ref={triggeredElementRef} src={ImagemTesteMobile} alt="" className="w-full" />
      </div>
      <div ref={triggerRef2} className="absolute top-0 w-full">
        <Image ref={triggeredElementRef2} src={ImagemBannerMobile} alt="" className="w-full"/>
      </div>
    </div>
  );
}
