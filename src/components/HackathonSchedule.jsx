import React from "react";
import { BentoTilt } from "./Features";
import Button from "./Button";
import Schedule from "../pdfs/Hackathon_Schedule-1.pdf";

const HackathonSchedule = () => {
  const schedule = [
    {
      day: "Day 1",
      events: [
        { time: "9:00 AM", event: "Opening Ceremony" },
        { time: "9:45 AM", event: "Class Allocation" },
        { time: "10:00 AM", event: "Hackathon Starts" },
        { time: "11:15 AM", event: "Icebreaker Activity (15 mins)" },
        { time: "1:00 PM", event: "Lunch Break" },
        {
          time: "2:30 PM",
          event: "Collaborative Brainstorming Session (20 mins)",
        },
        { time: "4:00 PM", event: "Quiz or Game Session" },
        {
          time: "5:30 PM",
          event: "Coffee Break + Energizer Activity (15 mins)",
        },
        { time: "7:00 PM", event: "Dinner" },
        {
          time: "7:45 PM",
          event: "Hackathon Work Session Continues (Optional Mentor Support)",
        },
      ],
    },
    {
      day: "Day 2",
      events: [
        { time: "8:00 AM", event: "Tea/Coffee and Cookies" },
        { time: "9:30 AM", event: "Morning Energizer Activity (15 mins)" },
        { time: "10:00 AM", event: "Midway Check-In with Mentors" },
        {
          time: "11:30 AM",
          event: 'Workshop: "Effective Debugging Techniques" (20 mins)',
        },
        { time: "1:00 PM", event: "Lunch Break" },
        { time: "2:30 PM", event: "Peer Review Session (20 mins)" },
        { time: "3:00 PM", event: "Debugging and Testing Session" },
        {
          time: "4:30 PM",
          event: 'Group Discussion: "Lessons Learned So Far" (15 mins)',
        },
        { time: "7:00 PM", event: "Dinner" },
        { time: "9:00 PM", event: "Late Night Work Hours" },
      ],
    },
    {
      day: "Day 3",
      events: [
        { time: "8:30 AM", event: "Submission Deadline" },
        { time: "9:00 AM", event: "Judging Starts" },
        { time: "12:00", event: "Results & Closing Ceremony" },
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
          isDownload={true}
          downloadFile={Schedule}
        />
      </div>
    </section>
  );
};

export default HackathonSchedule;
