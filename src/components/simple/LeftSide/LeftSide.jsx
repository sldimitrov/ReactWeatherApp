import Aside from "./Aside";
import Background from "./Background";

export default function LeftSide({ onClickBg }) {
  return (
    <>
      <Aside
        onSelectButton={() => {
          onClickBg();
        }}
      />
      <Background
        onClickBackground={() => {
          onClickBg();
        }}
      />
    </>
  );
}
