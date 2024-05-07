import emptyImg from "../../../../../../images/empty.png";

export default function EmptyHistory({ onClickCont }) {
  return (
    <div id="empty-descr-container">
      <img src={emptyImg} alt="Empty space" id="empty-folder-img" />
      <h1
        id="empty-descr"
        onClick={() => {
          onClickCont();
        }}
      >
        SEACHING HISTORY IS NOW EMPTY
      </h1>
    </div>
  );
}
