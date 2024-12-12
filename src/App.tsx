import "./App.scss";
import { useRandomTracks } from "./hooks/useRandomTracks";
import { useTrackStore } from "./hooks/useTrackStore";

function App() {
  useRandomTracks();
  const { tracks } = useTrackStore();

  return (
    <ul className="tracks">
      {tracks.map((track) => (
        <li className="track__item" key={track.id}>
          <div className="track__info">
            <img
              className="track__img"
              src={track.albumImage}
              alt={track.name}
            />
            <p className="track__name">
              {track.name} - {track.artist}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default App;
