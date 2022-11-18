import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
  const dispatch = useDispatch();

  //* declared in playerSlice.js (choosing a specific piece of state in this case it is palyer)
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );
  //* if there is any error error component will load else music comp loads
  if (isFetching) return <Loader title="loading.." />;
  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex-col sm:flex-row justify-between items-center mt-4 mb-10">
        <h2 className="font-bold text-4xl text-[#ffffff] text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={(e) => {
            //* dispactching the current selected value to redux
            dispatch(selectGenreListId(e.target.value));
          }}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5 text-center"
          //* if something goes wrong pop will show
          value={genreListId || "pop"}
        >
          {/* genre names and value fetching  */}
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 sm:justify-start justify-center gap-4 sm:gap-6  scroll-smooth">
        {data.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
