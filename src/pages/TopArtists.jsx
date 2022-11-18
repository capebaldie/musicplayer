import React from "react";
import { ArtistCard, Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  //
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>
      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 sm:justify-start justify-center gap-4 sm:gap-6  scroll-smooth">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
