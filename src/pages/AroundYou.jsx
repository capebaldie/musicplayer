import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const CountryTracks = () => {
  //
  const [country, setCountry] = useState("IN");
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  //get topcharts using country code
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  if (isFetching) return <Loader title="loading.." />;
  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Popular Around you
      </h2>
      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 sm:justify-start justify-center gap-4 sm:gap-6  scroll-smooth">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
