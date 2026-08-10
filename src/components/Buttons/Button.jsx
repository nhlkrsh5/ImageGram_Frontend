function Button({ text, type, onclick }) {
  return (
    <button onClick={onclick} className="btn btn-primary">
      {text}
    </button>
  );
}
export default Button;
