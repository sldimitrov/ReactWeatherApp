export default function EmptyHistory({ onClickCont }) {
  return (
    <div id="empty-descr-container">
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
