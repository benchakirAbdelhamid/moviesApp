import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../store/moviesSlice";
import MoviesCategory from "./MoviesCategory";
function Category() {
  const globaleStateCategory = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [defaultMovies, setDefaultMovies] = useState(0);
  const [defaultIdMovies, setDefaultIdMovies] = useState(18);
  const [moviesCategory, setMoviesCategory] = useState([]);
  const [data, setData] = useState([]);

  const handleCategory = (listCategory) => {
    setDefaultMovies(1);
    setDefaultIdMovies(listCategory.id);
  };

  useEffect(() => {
    if (defaultMovies === 0) {
      if (globaleStateCategory.statusCategory === "idle") {
        dispatch(fetchCategory(defaultIdMovies));
        setMoviesCategory(globaleStateCategory.categoryMovies);
      }
    } else if (defaultMovies === 1) {
      dispatch(fetchCategory(defaultIdMovies));
      setMoviesCategory(globaleStateCategory.categoryMovies);
      setDefaultIdMovies(0);
      setDefaultMovies(3);
    } else {
      setMoviesCategory([]);
      setDefaultMovies(3);
    }
  }, [defaultMovies]);

  if (moviesCategory.length !== 0) {
    console.log(moviesCategory);
    // setData(moviesCategory)
  }
  return (
    <div>
      <nav>
        <button onClick={() => handleCategory({ category: "Action", id: 28 })}>
          Action
        </button>
        <button
          onClick={() => handleCategory({ category: "Family", id: 10751 })}
        >
          Family
        </button>
        <button onClick={() => handleCategory({ category: "Fantasy", id: 14 })}>
          Fantasy
        </button>
        <button onClick={() => handleCategory({ category: "History", id: 36 })}>
          History
        </button>
        <button
          onClick={() => handleCategory({ category: "Music", id: 10402 })}
        >
          Music
        </button>
        <button onClick={() => handleCategory({ category: "Drama", id: 18 })}>
          Drama
        </button>
        <button
          onClick={() => handleCategory({ category: "Documentary", id: 99 })}
        >
          Documentary
        </button>
        <button onClick={() => handleCategory({ category: "Crime", id: 80 })}>
          Crime
        </button>
        <button onClick={() => handleCategory({ category: "Comedy", id: 35 })}>
          Comedy
        </button>
      </nav>
      {data && <MoviesCategory dataMovie={data} />}
    </div>
  );
}

export default Category;
