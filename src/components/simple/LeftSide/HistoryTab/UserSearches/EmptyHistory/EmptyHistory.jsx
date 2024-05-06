import emptyImg from "../../../../../../images/empty.png";

export default function EmptyHistory() {
  return (
    <div id="empty-descr-container">
      <img src={emptyImg} alt="Empty space" id="empty-folder-img" />
      <h1 id="empty-descr">SEACHING HISTORY IS NOW EMPTY</h1>
    </div>
  );
}
