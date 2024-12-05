import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.set("#image-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#image-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getImageSrc = () => "img/Heroo.jpg";

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="image-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <picture>
          {/* Image for desktop */}
          <source media="(min-width: 768px)" srcSet="img/Hero_desktop.jpg" />
          {/* Image for mobile */}
          <source media="(max-width: 767px)" srcSet="img/Hero_mobile.jpg" />
          <img
            src="img/Hero.jpg" // Fallback image
            alt="Hackathon Preview"
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </picture>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          tech tit<b>an</b>s
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-36 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-75 text-base">
              Web I<b>n</b>novators
            </h1>
            <h1 className="special-font hero-heading text-blue-75 text-base py-12 max-sm:py-3">
              h<b>a</b>ckathon
            </h1>
            <p className="mb-5 max-w-100 font-circular-web text-blue-100">
              The ultimate challenge for frontend web developers to innovate and
              inspire.
            </p>

            <Button
              id="watch-trailer"
              title="Register Now"
              leftIcon={<TiLocationArrow />}
              containerClass="lg:hidden !bg-default flex-center gap-1"
              formLink="https://forms.gle/FDF2UvJGFkEbYq929"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        tech tit<b>an</b>s
      </h1>
    </div>
  );
};

export default Hero;
