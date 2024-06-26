import ListItem from "./ListItem";
import "./List.css";
function List({ list }) {
  return (
    <div className="list-wrap">
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default List;
