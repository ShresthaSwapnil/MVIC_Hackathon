import React from "react";
import Button from "./Button";
import Schedule from "../pdfs/Hackathon_Schedule-1.pdf";
import Checklist from "../pdfs/Web Innovators Hackathon Checklist.pdf";

const DownloadSection = () => {
  return (
    <section
      id="downloads"
      className="flex flex-col items-center justify-center py-10"
    >
      <h2 className="font-zentry mb-5 text-5xl font-bold text-black">
        Download Resources
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          title="Hackers Checklist"
          containerClass="text-white"
          isDownload={true}
          downloadFile={Checklist}
        />

        {/* <Button
          title="Code of Conduct"
          containerClass="bg-blue-500 hover:bg-blue-600 text-white"
          isDownload={true}
          downloadFile="path/to/assets.zip"
        /> */}

        <Button
          title="Schedule"
          containerClass="bg-red-500 hover:bg-red-600 text-white"
          isDownload={true}
          downloadFile={Schedule}
        />
      </div>
    </section>
  );
};

export default DownloadSection;
