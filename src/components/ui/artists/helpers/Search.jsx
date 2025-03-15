export default function Search({ onSearch }) {
  return (
    <div className="w-60">
      <input
        type="text"
        onInput={(e) => onSearch(e.target.value.trim().toLowerCase())}
        placeholder="Search.."
        className="rounded-xl focus:outline-blue-400  border-blue-300 font-medium text-gray-600 text-lg border-1 p-2"
      />
    </div>
  );
}
