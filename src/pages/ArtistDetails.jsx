import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

const ArtistDetails = () => {
  //useparams is used to go to a specific route with given id
  //id renamed as artistid
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching } = useGetArtistDetailsQuery({
    artistId,
  });
  if (isFetching) return <Loader title="Loading artist details..." />;

  if (Error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
