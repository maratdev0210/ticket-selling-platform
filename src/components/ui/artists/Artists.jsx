import Artist from "./helpers/Artist";
import { ARTISTS } from "./helpers/artists";
// list of artists

export default function Artists() {
  return (
    <div className="h-80">
      <div>
        <h2 className="font-medium text-lg px-4 text-gray-800">
          Check out artists who are currently on tour!
        </h2>
      </div>
      {ARTISTS.map(({ avatar, name, genre, description }, index) => {
        return (
          <Artist
            key={index}
            avatar={avatar}
            name={name}
            genre={genre}
            description={description}
          />
        );
      })}
    </div>
  );
}
