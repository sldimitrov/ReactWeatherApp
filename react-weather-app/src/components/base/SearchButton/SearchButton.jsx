import searchImg from "../../images/search.png";

export default function SearchButton() {
  return (
    <button id="search-button">
      <img src={searchImg} id="searcher-img" alt="Search icon" />
    </button>
  );
}
