import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TesteImage from "../../assets/abraco.png";
import ImagemBannerMain from "../../assets/bannerMain.png";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

export function Animation() {
  const triggerRef = useRef<any>(null);
  const triggerRef2 = useRef<any>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(triggerRef.current, {
      scrollTrigger: {
        trigger: ".gsap-scroll",
        start: "top top",
        pin: ".gsap-scroll",
        markers: false,
        scrub: 1,
        end: 10,
      },
      opacity: 0,
    });
    gsap.from(triggerRef2.current, {
      scrollTrigger: {
        trigger: ".gsap-scroll",
        start: "top top",
        pin: ".gsap-scroll",
        markers: false,
        scrub: 1,
        end: 10,
      },
      opacity: 0,
    });
  }, []);

  return (
    <div>
      <div className=" relative">
        <div>
          <Image
            className="max-h-full w-full absolute top-0"
            src={TesteImage}
            alt=""
          />
        </div>
        <div ref={triggerRef} className="relative">
          <Image src={ImagemBannerMain} className="w-full" alt="Rafael Prudente Trabalha pelo DF" />
        </div>
      </div>
    </div>
  );
}
