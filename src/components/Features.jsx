import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, textCol }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute h-[64%] left-0 bottom-0 size-full object-cover object-center"
      />
      <div className={textCol}>
        <div>
          <h1 className="bento-title special-font max-sm:text-2xl">{title}</h1>
          {description && (
            <p className="mt-3 max-w-68 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="hero-heading special-font text-lg text-blue-50">
          Tr<b>a</b>cks
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-100 mt-8">
          We have decided on 5 Tracks for Our First Hackathon
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/track-1.mp4"
          title={
            <>
              L<b>o</b>cal Touris<b>m</b> <b>a</b>nd Cultural Heritage
            </>
          }
          description="Celebrate and preserve the stories that define our heritage."
          textCol="relative z-10 flex size-full flex-col justify-between p-5 text-white"
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-2 max-sm:grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/track-2.mp4"
            title={
              <>
                Envir<b>o</b>n<b>m</b>ental Aw<b>a</b>re<b>n</b>ess
              </>
            }
            description="Innovate for a greener, more sustainable future"
            textCol="relative z-10 flex size-full flex-col justify-between p-5 text-white"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/track-3.mp4"
            title={
              <>
                Public Tra<b>n</b>sp<b>o</b>rt
              </>
            }
            description="Revolutionizing how we move, together."
            textCol="relative z-10 flex size-full flex-col justify-between p-5 text-blue-300"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/track-4.mp4"
            title={
              <>
                Loc<b>a</b>l F<b>o</b>od and Restur<b>a</b>nt Disc<b>o</b>very
              </>
            }
            description="Connecting food lovers to local culinary gems."
            textCol="relative z-10 flex size-full flex-col justify-between p-5 text-white"
          />
        </BentoTilt>
      </div>

      <BentoTilt className="border-hsla relative my-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/track-5.mp4"
          title={
            <>
              Digit<b>a</b>l Marketpl<b>a</b>ce for l<b>o</b>cal artist
            </>
          }
          description="Empowering creativity, one artist at a time."
          textCol="relative z-10 flex size-full flex-col justify-between p-5 text-default"
        />
      </BentoTilt>

      <div className="grid h-[40vh] w-full grid-cols-2 grid-rows-1 gap-7">
        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-default p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              Ch<b>o</b>ose o<b>n</b>e that y<b>o</b>u like.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/title.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
