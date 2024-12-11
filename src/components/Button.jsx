import React from "react";

const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
  formLink,
  isDownload,
  downloadFile,
}) => {
  const handleClick = () => {
    if (isDownload) {
      const link = document.createElement("a");
      link.href = downloadFile;
      link.download = downloadFile.split("/").pop(); // Sets the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (formLink) {
      window.open(formLink, "_blank");
    }
  };
  return (
    <div className="flex-center">
      <button
        id={id}
        className={`z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-default px-7 py-3 text-black ${containerClass}`}
        onClick={handleClick}
      >
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div>{title}</div>
        </span>
        {rightIcon}
      </button>
    </div>
  );
};

export default Button;
// https://forms.gle/FDF2UvJGFkEbYq929
