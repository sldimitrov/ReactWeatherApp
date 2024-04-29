export default function BackgroundLayout({ onClickBackground }) {
  return (
    <div
      className="sidebar-background-container active"
      onClick={() => {
        onClickBackground();
      }}
    ></div>
  );
}
