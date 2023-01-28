import React, { useEffect } from "react";

function MoviesCategory(props) {
  useEffect(() => {
    // console.log("===>", props.dataMovie);
    // console.log(props.dataMovie.length);
  }, [props]);
  return (
    <div>
      {/* {props.dataMovie !== 0 &&
        props.dataMovie.map((res, pos) => {
          return (
            <>
              <h1> {res.items.id} </h1>
            </>
          );
        })} */}
      <h1 id="x">not found</h1>
    </div>
  );
}

export default MoviesCategory;
