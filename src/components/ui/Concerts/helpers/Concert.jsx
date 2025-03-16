import { useStore } from "zustand";
import { useArtist } from "../../../state/useArtist";
import { useConcert } from "../../../state/useConcert";

export default function Concert({ city, date, venue }) {
  const artist = useStore(useArtist, (state) => state.artist);
  const setConcert = useStore(useConcert, (state) => state.setConcert);

  const onPick = () => {
    setConcert({ date, city, venue }); // user can now pick the seats
  };

  return (
    <div>
      <div className="px-4 py-2 flex items-center gap-2">
        <div>
          <img src={artist.avatar} className="size-9 rounded-full" />
        </div>
        <div>
          <div className="flex gap-1">
            <span className="font-bold text-gray-500">{venue}, </span>
            <span className="font-medium text-gray-400">{city}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-medium text-sm text-gray-400">{date}</span>
            <span
              onClick={onPick}
              className="font-medium text-sm text-blue-400 cursor-pointer"
            >
              Pick seats
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
