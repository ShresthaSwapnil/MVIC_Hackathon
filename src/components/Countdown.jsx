import { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2024-12-09T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="min-h-[50dvh] flex-center bg-black">
      <div className="bento-tilt_1 w-11/12 md:w-2/3 p-6 bg-default text-black">
        <h1 className="special-font text-center text-6xl font-zentry mb-6">
          Cou<b>n</b>td<b>o</b>wn Till the H<b>a</b>ckathon!
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex-center flex-col">
            <div className="text-5xl font-bold">{timeLeft.days}</div>
            <div className="text-lg font-circular-web opacity-80">Days</div>
          </div>
          <div className="flex-center flex-col">
            <div className="text-5xl font-bold">{timeLeft.hours}</div>
            <div className="text-lg font-circular-web opacity-80">Hours</div>
          </div>
          <div className="flex-center flex-col">
            <div className="text-5xl font-bold">{timeLeft.minutes}</div>
            <div className="text-lg font-circular-web opacity-80">Minutes</div>
          </div>
          <div className="flex-center flex-col">
            <div className="text-5xl font-bold">{timeLeft.seconds}</div>
            <div className="text-lg font-circular-web opacity-80">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
