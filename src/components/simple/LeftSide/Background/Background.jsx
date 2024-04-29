export default function Background({ onClickBackground }) {
  return (
    <div
      className="sidebar-background-container active"
      onClick={() => {
        onClickBackground();
      }}
    ></div>
  );
}
