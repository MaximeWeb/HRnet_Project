export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-control">
      <label htmlFor="search">
        Search:
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search employees..."
      />
    </div>
  );
}