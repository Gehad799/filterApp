import { categoryList, ratingList } from "../../constants";
import CheckBox from "../common/CheckBox";
import FilterToggle from "../common/FilterToggle";
import PriceRange from "../common/PriceRange";
import "./FilterPanel.css";
function FilterPanel({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectedPrice,
  changePrice,
  selectRating,
  cuisines,
  changeChecked,
}) {
  return (
    <div>
      {/* category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* cuisines */}
      <div className="input-group">
        <p className="label">Cuisines</p>
        {cuisines.map((cuisine) => (
          <CheckBox
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* price range */}
      <div className="input-group">
        <p className="label-range">Price Range</p>
        <PriceRange value={selectedPrice} changePrice={changePrice} />
      </div>
      {/* star rate */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
}
export default FilterPanel;
