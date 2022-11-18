import React from "react";

const Error = ({ title }) => (
  <div className="w-full flex justify-center items-center">
    <h1 className="font-bold text-lg sm:text-2xl text-white mt-2">
      {title ||
        "Something went wrong! Check your internet conncection and try again..."}
    </h1>
  </div>
);

export default Error;
