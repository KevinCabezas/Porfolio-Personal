
// src/components/Log/Input.js
const InputGeneric = ({ type, name, onChange, value, placeholder, options }) => {
  
  if (type === "select") {
    return (
      <select
        name={name}
        onChange={onChange}
        value={value}
        required
        className="rounded p-2 pl-2 w-full bg-gray-200 text-sm outline-none"
      >
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      required
      placeholder={placeholder}
      className="rounded p-2 pl-2 w-full bg-gray-200 text-sm outline-none"
    />
  );
};

export default InputGeneric;