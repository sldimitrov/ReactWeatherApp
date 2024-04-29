import exitButtonImg from "../../images/exit_button.png";

export default function ExitButton({ onSelectExit }) {
  function handleClickExit() {
    onSelectExit();
  }

  return (
    <button id="exit-button">
      <img
        src={exitButtonImg}
        alt="exit button"
        id="exit-img"
        onClick={() => {
          handleClickExit();
        }}
      />
    </button>
  );
}
