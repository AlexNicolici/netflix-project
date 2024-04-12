import { createSlice } from "@reduxjs/toolkit";
import { MyMoviesDataInterface } from "../interfaces/movie.interface";

export interface MovieStateInterface {
  myMoviesList: MyMoviesDataInterface;
}

const defaultMovieState: MovieStateInterface = {
  myMoviesList: {
    data: [],
    isLoadingMovie: false,
    isErrorMovie: false,
    errorMessageMovie: "",
  },
};

export const movie = createSlice({
  name: "movie",
  initialState: defaultMovieState,
  reducers: {
    addMovieToMyList(state, action) {
      const newMovieListData = [action.payload, ...state.myMoviesList.data];
      return {
        ...state,
        myMoviesList: {
          ...state.myMoviesList,
          data: newMovieListData,
        },
      };
    },
    removeMovieFromMyList(state, action) {
      const newMovieListData = state.myMoviesList.data.filter((myMovie) => {
        return myMovie.name !== action.payload.name;
      });
      return {
        ...state,
        myMoviesList: {
          ...state.myMoviesList,
          data: newMovieListData,
        },
      };
    },
  },
  extraReducers: (builder) => {},
});

export default movie.reducer;

export const { addMovieToMyList, removeMovieFromMyList } = movie.actions;
