import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Web Innovators Hackathon
        </h2>
        <AnimatedTitle
          title="Discover the largest event hosted by MVIC Students"
          containerClass="mt-5 !text-black text-center !max-sm:text-[4rem]"
        />
        <div className="abour-subtext">
          <p>
            Title Sponsor <b>Mid-Valley International College</b>
          </p>
          <p>
            Hosted by <b>Tech Titans</b> Club
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <picture>
            {/* Image for desktop */}
            <source media="(min-width: 768px)" srcSet="img/About.jpg" />
            {/* Image for mobile */}
            <source media="(max-width: 767px)" srcSet="img/About_mobile.jpg" />
            <img
              src="img/About-desktop.jpg" // Fallback image
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default About;
