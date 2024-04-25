import exitButton from "../../images/button.png";

export default function SlideBar({ children }) {
  return (
    <>
      <aside className="aside">
        <div className="sidebar-container">
          <div className="sidebar-nav">
            <h2 id="sidebar-heading">Searching History</h2>
            <button id="exit-button">
              <img src={exitButton} alt="exit button" id="exit-img" />
            </button>
          </div>
          <section className="history-container">
            <div className="browsed-city" id="example"></div>
          </section>
        </div>
      </aside>
      {children}
    </>
  );
}
