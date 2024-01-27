export default function Button({ text, onPrint, id, isActive }) {
  return (
    <>
      <button
        onClick={() => onPrint(id)}
        className={isActive ? "active" : undefined}
        id="button"
      >
        {text}
      </button>
    </>
  );
}
