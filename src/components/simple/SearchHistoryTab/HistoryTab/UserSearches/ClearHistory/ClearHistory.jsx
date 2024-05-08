export default function ClearHistory({ handleClearHistory }) {
  return (
    <button id="clear-history-btn" onClick={handleClearHistory}>
      <p id="clear-text">Clear History</p>
    </button>
  );
}
