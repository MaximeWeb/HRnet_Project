import "./dropmenu.css";

export default function DropMenu({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  id,
  name,
  disabled = false,
  required = false,
  className = "",
}) {
  const handleChange = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      required={required}
      className={`dropmenu ${className}`.trim()}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled ?? false}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}