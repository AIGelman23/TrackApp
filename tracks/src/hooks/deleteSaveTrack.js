import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { deleteTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
  } = useContext(LocationContext);

  const deleteTrack = async () => {
    await deleteTrack(name, locations);
  };

  return [deleteTrack];
};
