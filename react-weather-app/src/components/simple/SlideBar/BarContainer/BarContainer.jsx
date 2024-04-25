export default function BarContainer({ children }) {
  return (
    <div className="sidebar-container">
      <section className="history-container">
        {children}
        <div className="browsed-city" id="example"></div>
      </section>
    </div>
  );
}
