import exitButton from "../../../../../images/exit_button.png";

export default function HistoryHeading({ handleClickHistory }) {
  return (
    <div className="sidebar-nav">
      <h2 id="sidebar-heading">Searching History</h2>
      <button
        id="exit-button"
        onClick={() => {
          handleClickHistory();
        }}
      >
        <img src={exitButton} alt="exit button" id="exit-img" />
      </button>
    </div>
  );
}
