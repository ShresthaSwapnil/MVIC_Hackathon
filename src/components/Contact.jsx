import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/Contact-1.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/Contact-2.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          /> */}
          <ImageClipBox
            src="/img/Mascoat.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase max-sm:hidden">
            Register for Hackathon Now!
          </p>

          <AnimatedTitle
            title="let&#39;s build the <br /> new era of <br /> innovation together."
            className="special-font !md:text-[6rem] w-full font-zentry !text-3xl !font-black !leading-[.9]"
          />

          <Button
            title="contact us"
            containerClass="mt-10 cursor-pointer"
            formLink="https://www.instagram.com/techtitans_np/"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
