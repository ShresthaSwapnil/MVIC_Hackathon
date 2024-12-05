import Button from "./Button";

const Registration = () => {
  return (
    <div className="min-h-[10dvh] flex-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-zentry font-black mb-6">
          Join the Innovators Hackathon 2024
        </h1>
        <p className="text-lg md:text-xl font-circular-web opacity-80 mb-10">
          Ready to showcase your skills in frontend development? Register now
          and secure your spot!
        </p>
        <Button
          title="Register Now!"
          //   rightIcon={<TiLocationArrow />}
          containerClass="bg-default items-center justify-center"
          formLink="https://forms.gle/FDF2UvJGFkEbYq929"
        />
      </div>
    </div>
  );
};

export default Registration;
