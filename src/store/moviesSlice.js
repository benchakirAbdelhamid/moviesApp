import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api/api";

let API_key = "&api_key=db95773a7fb212ba790d71f6adac0e7e";

// fetching movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await API.get(
    `/discover/movie?sort_by=popularity.desc${API_key}`
  );
  return response.data;
});
export const fetchMoviesBySearch = createAsyncThunk(
  "movies/fetchMoviesBySearch",
  async (valueSearch) => {
    const responseBySearch = await API.get(
      `/search/movie?${API_key}&query=${valueSearch}`
    );
    return responseBySearch.data;
  }
);

export const fetchCategory = createAsyncThunk(
  "fetchCategory",
  async (categoryId) => {
    const responseCategory = await API.get(
      `/list/${String(categoryId)}?api_key=db95773a7fb212ba790d71f6adac0e7e`
    );
    // console.log("===>", responseCategory.data);
    // console.log("===>", categoryId);
    return responseCategory.data;
  }
);

const counterSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    moviess: [],
    categoryMovies: [],
    status: "idle",
    error: null,
    statuss: "idle",
    errors: null,
    statusCategory: "idle",
    errorCategory: null,
  },
  reducers: {
    increment: (state, action) => {
      console.log("state");
      //   state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMoviesBySearch.pending, (state) => {
        state.statuss = "loading";
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
        state.moviess = action.payload;
        state.statuss = "succeeded";
      })
      .addCase(fetchMoviesBySearch.rejected, (state, action) => {
        state.statuss = "failed";
        state.errors = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.statusCategory = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categoryMovies = action.payload;
        state.statusCategory = "succeeded";
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.statusCategory = "failed";
        state.errorCategory = action.error.message;
      });
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
