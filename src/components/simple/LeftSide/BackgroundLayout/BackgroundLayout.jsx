import { useHistoryTab } from "../../../../themeContext";

export default function BackgroundLayout() {
  const [historyTab, setHistoryTab] = useHistoryTab();

  function handleClickHistory() {
    setHistoryTab(!historyTab);
  }

  return (
    <div
      className={
        historyTab
          ? "sidebar-background-container active"
          : "sidebar-background-container"
      }
      onClick={() => {
        handleClickHistory();
      }}
    ></div>
  );
}
