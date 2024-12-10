import React from "react";
import { BentoTilt } from "./Features"; // Assuming BentoTilt is in the same folder
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const HackathonSchedule = () => {
  const schedule = [
    {
      day: "Day 1",
      events: [
        { time: "9:00 AM", event: "Opening Ceremony" },
        { time: "9:45 AM", event: "Class Allocation" },
        { time: "10:00 AM", event: "Hackathon Starts" },
        { time: "1:00 PM", event: "Lunch Break" },
        { time: "4:00 PM", event: "Quiz or Game Session" },
        { time: "7:00 PM", event: "Dinner" },
      ],
    },
    {
      day: "Day 2",
      events: [
        { time: "8:00 AM", event: "Tea/Coffee and Cookies" },
        { time: "10:00 AM", event: "Midway Check-In with Mentors" },
        { time: "1:00 PM", event: "Lunch Break" },
        { time: "3:00 PM", event: "Debugging and Testing Session" },
        { time: "7:00 PM", event: "Dinner" },
        { time: "9:00 PM", event: "Late Night Work Hours" },
      ],
    },
    {
      day: "Day 3",
      events: [
        { time: "8:30 AM", event: "Submission Deadline" },
        { time: "9:00 AM", event: "Hackathon Ends" },
        { time: "10:00 AM", event: "Closing Ceremony & Results" },
      ],
    },
  ];

  return (
    <section id="schedule" className="bg-black pb-32">
      <div className="container mx-auto px-3 md:px-10">
        <h1 className="font-zentry text-center text-4xl md:text-6xl text-white mb-10">
          Hackathon Schedule
        </h1>
        {schedule.map((day, index) => (
          <BentoTilt
            key={index}
            className="border-hsla relative mb-10 h-auto w-full overflow-hidden rounded-md bg-green-500/90 p-6 shadow-lg"
          >
            <div className="text-white">
              <h2 className="text-2xl font-robert-medium font-bold mb-4">
                {day.day}
              </h2>
              <ul className="space-y-4">
                {day.events.map((event, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-28 text-lg font-semibold">
                      {event.time}
                    </span>
                    <span className="text-lg font-circular-web">
                      {event.event}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BentoTilt>
        ))}
        <Button
          title="Download the Schedule!"
          containerClass="bg-default items-center justify-center"
          formLink="https://forms.gle/FDF2UvJGFkEbYq929"
        />
      </div>
    </section>
  );
};

export default HackathonSchedule;
