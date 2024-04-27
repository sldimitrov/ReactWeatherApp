import exitButton from "../../../images/exit_button.png";

export default function Aside({ onSelectButton }) {
  return (
    <aside className="aside">
      <div className="sidebar-container active">
        <div className="sidebar-nav">
          <h2 id="sidebar-heading">Searching History</h2>
          <button
            id="exit-button"
            onClick={() => {
              onSelectButton();
            }}
          >
            <img src={exitButton} alt="exit button" id="exit-img" />
          </button>
        </div>
        <section className="history-container active">
          <div className="browsed-city" id="example"></div>
        </section>
      </div>
    </aside>
  );
}
