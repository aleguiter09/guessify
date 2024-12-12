import { create } from "zustand";
import { ITrack } from "../types/ITrack";

interface TrackStore {
  tracks: ITrack[];
  addTracks: (tracks: ITrack[]) => void;
}

export const useTrackStore = create<TrackStore>((set) => ({
  tracks: [],

  addTracks: (tracks) =>
    set(() => ({
      tracks: tracks,
    })),
}));
