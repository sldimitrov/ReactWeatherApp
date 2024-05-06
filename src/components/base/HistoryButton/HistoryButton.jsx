import historyImg from "../../../images/history.png";
import { useHistoryTab, useSetHistoryTab } from "../../../themeContext";

export default function HistoryButton() {
  const historyTab = useHistoryTab();
  const setHistoryTab = useSetHistoryTab();

  function handleClickHistory() {
    setHistoryTab(!historyTab);
    console.log(historyTab);
  }
  return (
    <button id="history-button">
      <img
        src={historyImg}
        id="h-image"
        alt="history button"
        onClick={() => {
          handleClickHistory();
        }}
      />
    </button>
  );
}
