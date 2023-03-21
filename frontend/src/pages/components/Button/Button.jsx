import "./button.css";

function Button({ title, type, style }) {
  return (
    <button className="btn" type={type} style={style}>
      {title}
    </button>
  );
}

export default Button;
