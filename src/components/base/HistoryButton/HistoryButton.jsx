import historyImg from "../../../images/history.png";
import { useHistoryTab } from "../../../themeContext";

export default function HistoryButton() {
  const [historyTab, setHistoryTab] = useHistoryTab();

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
