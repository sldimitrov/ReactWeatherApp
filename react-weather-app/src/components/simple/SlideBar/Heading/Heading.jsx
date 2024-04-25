export default function Heading({ children }) {
  return (
    <div className="sidebar-nav">
      <h2 id="sidebar-heading">Searching History</h2>
      {children}
    </div>
  );
}
