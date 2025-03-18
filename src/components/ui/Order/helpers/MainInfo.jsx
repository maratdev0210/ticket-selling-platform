export default function MainInfo({artist, concert}) {
  return (
    <>
      <div className="flex justify-between">
        <span className="text-pink-500 font-bold text-lg">Artist:</span>
        <div>
          <span className="text-gray-800 font-bold text-lg">{artist.name}</span>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-pink-500 font-bold text-lg">Date:</span>
        <div>
          <span className="text-gray-800 font-bold text-lg">
            {concert.date}
          </span>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-pink-500 font-bold text-lg">City:</span>
        <div>
          <span className="text-gray-800 font-bold text-lg">
            {concert.city}
          </span>
        </div>
      </div>
    </>
  );
}
