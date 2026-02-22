export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      placeholder="Søk etter artikler..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}