import historyImg from "../../../assets/history.png";
import { useHistoryTab } from "../../../themeContext";

export default function HistoryButton() {
  const [historyTab, setHistoryTab] = useHistoryTab();

  function handleClickHistory() {
    setHistoryTab(!historyTab);
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
