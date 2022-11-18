import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    /* this function results in changing the state in redux store and pause music */
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      className="flex flex-col md:w-[200px] p-2 sm:p-4 bg-gray-400/5 bg-opacity-60
   backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:scale-[1.02] ease-in duration-150"
    >
      <div className="relative w-full h-full group">
        {/*  if the song is currently playing it'll have a different style */}
        <div
          className={`absolute inset-0 justify-center items-center bg-black rounded-lg bg-opacity-40 group-hover:flex
          ${
            activeSong?.title === song?.title
              ? "flex bg-red-400 bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePlay={handlePlayClick}
            handlePause={handlePauseClick}
          />
        </div>
        <img
          className="w-full h-full rounded-lg "
          src={song.images?.coverart}
          alt="song title"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {/* leads to single song details page */}
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-xs truncate text-gray-300 mt-1">
          {/* leads to artist details page, if no artist is found then leads to top artists page  */}
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
