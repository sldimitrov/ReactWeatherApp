import HistoryTab from "./HistoryTab";
import BackgroundLayout from "./BackgroundLayout";

export default function LeftSide({ onClickBg }) {
  return (
    <>
      <HistoryTab
        onSelectButton={() => {
          onClickBg();
        }}
      />
      <BackgroundLayout
        onClickBackground={() => {
          onClickBg();
        }}
      />
    </>
  );
}
