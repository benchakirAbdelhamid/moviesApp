import react, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, fetchMoviesBySearch } from "../store/moviesSlice";
const Main = () => {
  const globaleState = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [movieDataBySearch, setDataBySearch] = useState([]);
  const [finalData, setfinalData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    if (globaleState.status === "idle") {
      dispatch(fetchMovies());
    }
  }, [globaleState]);

  useEffect(() => {
    if (searchVal.length !== 0) {
      dispatch(fetchMoviesBySearch(searchVal));
    }
    if (globaleState.moviess.results !== undefined) {
      setDataBySearch(globaleState.moviess.results);
    }
  }, [searchVal]);

  useEffect(() => {
    if (searchVal.length === 0) {
      if (globaleState.movies.results !== undefined) {
        setfinalData(globaleState.movies.results);
      }
    } else {
      if (movieDataBySearch !== undefined) {
        setfinalData(movieDataBySearch);
      }
    }
  });

  return (
    <>
      <div className="header">
        <form id="form">
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              id="inputText"
              value={searchVal}
              onChange={({ target }) => setSearchVal(target.value)}
            ></input>
            <button type="button">
              {" "}
              <i className="fas fa-search"></i>{" "}
            </button>
          </div>
        </form>
      </div>

      <div className="container">
        {finalData.length > 1 &&
          finalData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })}
        <h1 id="x">not found</h1>
      </div>
    </>
  );
};
export default Main;
