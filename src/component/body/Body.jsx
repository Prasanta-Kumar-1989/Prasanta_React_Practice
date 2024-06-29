import Restuarants from "../resturants/Restuarants";
import "../body/Body.css";
const Body = () => {
  return (
    <div className="body">
      <div className="search_bar">
        <input type="text" placeholder="Search Restuarant Name.." />
      </div>
      <div className="restuarant_container">
        <Restuarants />
      </div>
    </div>
  );
};
export default Body;
