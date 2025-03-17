// dates: [June 14, 2025, July 15, 2025, ...]
// setDate: [June 14, 2025] => set this date as the only one
export default function DateFilter({ dates, setDate }) {
  const onSelect = (e) => {
    setDate(e.target.value);
  };

  return (
    <select
      className="border-1 py-2 w-48 sm:w-40 focus:outline-blue-200 border-gray-300 text-gray-500 font-medium rounded-sm px-2"
      onChange={onSelect}
    >
      <option value="default">All dates</option>
      {dates.map((date, index) => {
        return (
          <option key={index} value={date}>
            {date}
          </option>
        );
      })}
    </select>
  );
}
