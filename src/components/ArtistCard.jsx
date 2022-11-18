import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[200px] p-2 sm:p-4 bg-gray-400/5 bg-opacity-60 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:scale-[1.02] ease-in duration-150"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        className="sm:w-full sm:h-full w-[80%] h-[80%]  rounded-lg "
        alt="song_img"
        src={track?.images?.background}
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
