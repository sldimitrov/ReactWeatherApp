export default function BlackBackground({ onClickBackground }) {
  function handleClickBackground() {
    onClickBackground();
  }

  return (
    <div
      className="sidebar-background-container"
      onClick={handleClickBackground}
    ></div>
  );
}
