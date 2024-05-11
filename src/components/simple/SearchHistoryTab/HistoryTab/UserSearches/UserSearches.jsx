import EmptyHistory from "./EmptyHistory";
import SearchedCity from "./SearchedCity";
import { useSearchHistory } from "../../../../../themeContext";

export default function UserSearches({ handleClickHistory }) {
  const [searchHistory] = useSearchHistory();
  return (
    <div className="scrollbox-history">
      <div className="scrollbox-history-inner">
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
            <EmptyHistory onClickCont={handleClickHistory} />
          )}
        </section>
      </div>
    </div>
  );
}
