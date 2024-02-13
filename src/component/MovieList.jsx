import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ search, handlerating, starrate, category }) => {
  const { tasks } = useSelector((state) => state);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {tasks
        .filter((el) => (category === "ALL" ? el : el.category === category))
        .filter(
          (el) =>
            el.title
              .trim()
              .toUpperCase()
              .includes(search.toUpperCase().trim()) && el.rate >= starrate
        )
        .map((el) => (
          <MovieCard el={el} key={el.id} handlerating={handlerating} />
        ))}
    </div>
  );
};

export default MovieList;
