export default function DebounceButton({ innerText, onClick, delay }) {
  return (
    <button
      onClick={() =>
        setTimeout(() => {
          onClick();
        }, delay)
      }
    >
      {innerText}
    </button>
  );
}
