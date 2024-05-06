import SearchedCity from "./SearchedCity";
import EmptyHistory from "./EmptyHistory";
import { useSearchHistory } from "../../../../../themeContext";

export default function UserSearches({ handleClickHistory }) {
  const searchHistory = useSearchHistory();

  return (
    <section className="history-container">
      {searchHistory.length > 0 ? (
        searchHistory.map((currCity, index) => (
          <SearchedCity
            city={currCity}
            key={index}
            onClickButton={handleClickHistory}
          />
        ))
      ) : (
        <EmptyHistory />
      )}
    </section>
  );
}
