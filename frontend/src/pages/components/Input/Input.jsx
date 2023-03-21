import "./input.css";

function Input({ type, onChange, placeholder }) {
  return (
    <input
      className="input"
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
