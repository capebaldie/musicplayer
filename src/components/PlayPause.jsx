import React, { useState } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      onClick={handlePause}
      className="w-10 h-10 text-gray-300 hover:text-white"
    />
  ) : (
    <FaPlayCircle
      onClick={handlePlay}
      className="w-10 h-10 text-gray-300 hover:text-white"
    />
  );

export default PlayPause;
