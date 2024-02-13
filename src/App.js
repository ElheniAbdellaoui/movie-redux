import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
import AddMovie from "./component/AddMovie";
import { add, filter } from "./redux/action";
import Star from "./component/Star";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const handlesearch = (e) => {
    setSearch(e.target.value);
  };
  const [starrate, setStarrate] = useState(1);
  const handlerating = (x) => {
    setStarrate(x);
  };
  const handlecategory = (newcategory) => {
    setCategory(newcategory);
  };
  return (
    <div className="App">
      <Filter
        starrate={starrate}
        handlerating={handlerating}
        search={search}
        sear={handlesearch}
        handlecategory={handlecategory}
      />
      <MovieList starrate={starrate} search={search} category={category} />
      <AddMovie add={add} />
    </div>
  );
}

export default App;
