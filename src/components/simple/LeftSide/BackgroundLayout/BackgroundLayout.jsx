import { useHistoryTab, useSetHistoryTab } from "../../../../themeContext";

export default function BackgroundLayout() {
  const historyTab = useHistoryTab();
  const setHistoryTab = useSetHistoryTab();

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
