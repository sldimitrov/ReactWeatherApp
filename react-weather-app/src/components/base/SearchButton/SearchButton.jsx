import searchImg from "../../images/search.png";

export default function SearchButton({ onSelectButton, city }) {
  function handleButtonClick() {
    console.log("func active");
    onSelectButton(city);
  }

  return (
    <button id="search-button" onClick={() => handleButtonClick()}>
      <img src={searchImg} id="searcher-img" alt="Search icon" />
    </button>
  );
}
