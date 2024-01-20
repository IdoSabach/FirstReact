export default function Button({ text, onSelect, curr }) {
  return (
    <>
      <button
        className="btn"
        onClick={onSelect}
      >
        {text}
      </button>
    </>
  );
}
