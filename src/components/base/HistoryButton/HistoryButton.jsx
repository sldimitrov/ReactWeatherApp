import historyImg from "../../../images/history.png";

export default function HistoryButton({ onSelectButton }) {
  function handleClickHistory() {
    onSelectButton();
  }

  return (
    <button id="history-button">
      <img
        src={historyImg}
        id="h-image"
        onClick={() => {
          handleClickHistory();
        }}
      />
    </button>
  );
}
