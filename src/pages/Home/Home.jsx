import { useEffect, useState } from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";
import "./Home.css";
import { dataList } from "../../constants";
import EmptyView from "../../components/common/EmptyView";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);
  const [searchQuery, setSearchQuery] = useState(" ");
  const [resultFound, setResultFound] = useState(true);

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);

  const handleSelectCategory = (e, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (e, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangePrice = (e, value) => {
    setSelectedPrice(value);
  };

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cuisines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    //rating filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    //category filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    //cuisines filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLocaleLowerCase());
    // console.log(cuisinesChecked);
    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    //price filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    //search filter
    if (searchQuery) {
      updatedList = updatedList.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
    }

    setList(updatedList);
    !updatedList.length ? setResultFound(false) : setResultFound(true);
  };

  useEffect(
    function () {
      applyFilters();
    },
    [selectedRating, selectedCategory, cuisines, selectedPrice, searchQuery]
  );

  return (
    <div className="home">
      {/* search bar */}
      <SearchBar
        value={searchQuery}
        changeInput={(e) => setSearchQuery(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* side panels */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
        <div className="home_list-wrap">
          {/* list &empty view */}
          {resultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
}
export default Home;
