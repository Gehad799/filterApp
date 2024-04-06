import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
function SearchBar({ value, changeInput }) {
  return (
    <div className="searchBar-wrap">
      <SearchIcon className="searchBar-icon" />
      <input
        type="text"
        placeholder="Woodland Hills"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
}
export default SearchBar;
