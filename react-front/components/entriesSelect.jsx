export default function EntriesSelect({ value, onChange }) {
  return (
    <div className="entries-control">
      <label htmlFor="entries">
        Show
      </label>

      <select
        id="entries"
        value={value}
        onChange={onChange}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>

      <span>entries</span>
    </div>
  );
}