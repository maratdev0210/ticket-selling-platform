export default function LocationFilter({ onSearch }) {
  return (
    <div className="w-60 sm:w-40">
      <input
        type="text"
        onInput={(e) => onSearch(e.target.value.trim().toLowerCase())}
        placeholder="Find your city.."
        className="rounded-sm focus:outline-blue-400  border-blue-300 font-medium py-3 text-gray-600 text-sm border-1 p-2"
      />
    </div>
  );
}
