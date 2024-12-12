import { useEffect } from "react";
import { getRandomTracks } from "../services/api/getRandomTracks";
import { adaptTracks } from "../utils/adaptTracks";
import { useTrackStore } from "./useTrackStore";

export const useRandomTracks = () => {
  const { addTracks } = useTrackStore();
  const getRandomOffset = () => Math.floor(Math.random() * 100);
  const getRandomLetter = () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26));

  useEffect(() => {
    const fetchData = async () => {
      const offset = getRandomOffset();
      const query = getRandomLetter();
      const { tracks } = await getRandomTracks(offset, 4, query);
      const adaptedTracks = adaptTracks(tracks.items);

      addTracks(adaptedTracks);
    };

    fetchData();
  }, [addTracks]);
};
