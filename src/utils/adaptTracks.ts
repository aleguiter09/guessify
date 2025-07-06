import { SpotifyTrack } from "../types/SpotifyTrack";
import type { ITrack } from "../types/ITrack";

export const adaptTracks = (tracks: SpotifyTrack[]): ITrack[] => {
  return tracks.map((track) => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    albumImage: track.album.images[1].url,
  }));
};
