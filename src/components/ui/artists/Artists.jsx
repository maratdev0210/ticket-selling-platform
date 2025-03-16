import Artist from "./helpers/Artist";
import { ARTISTS } from "./helpers/artists";
import Carousel from "../carousel/Carousel";
import Search from "./helpers/Search";
import { useState, useEffect } from "react";
import Skeleton from "./helpers/Skeleton";
// list of artists

export default function Artists() {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState(ARTISTS);
  const [isLoading, setIsLoading] = useState(true);

  // animate the search 
  useEffect(() => {
    setIsLoading(true);
    const simulateLoad = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } finally {
        setIsLoading(false);
      }
    };

    simulateLoad();
  }, [search]);

  useEffect(() => {
    setArtists(
      ARTISTS.filter((artist) => artist.name.toLowerCase().includes(search))
    );
  }, [search]);

  return (
    <div className="h-auto mb-2">
      <div>
        <h2 className="font-medium text-2xl text-center py-8 text-gray-800">
          Check out artists who are currently on tour!
        </h2>
      </div>
      <div className="flex justify-center">
        <Carousel />
        <div>
          <Search onSearch={setSearch} />
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="border-2 border-gray-200 mt-4 rounded-xl h-105 container overflow-auto w-80">
              {artists.map(({ avatar, name, genre, description }, index) => {
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
          )}
        </div>
      </div>
    </div>
  );
}
