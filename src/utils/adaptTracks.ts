export const adaptTracks = (tracks: object[]) => {
  return tracks.map((track: any) => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    albumImage: track.album.images[1].url,
  }));
};
