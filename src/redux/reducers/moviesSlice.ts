import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getMoviePopular,
  ResultMovie,
} from '../../api/services/moviesServices';
import { RootState } from '../store';

export interface IMoviesList {
  isLoadingMovies: boolean;
  moviesList: ResultMovie[];
  error?: boolean;
}

const initialState: IMoviesList = {
  isLoadingMovies: false,
  moviesList: [] as ResultMovie[],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    start: state => {
      return {
        ...state,
        isLoadingMovies: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
        isLoadingMovies: false,
      };
    },
    error: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoadingMovies: false,
        error: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.isLoadingMovies = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.moviesList = action.payload;
      state.isLoadingMovies = false;
    });
    builder.addCase(fetchMovies.rejected, state => {
      state.isLoadingMovies = false;
    });
  },
});

export const fetchMovies = createAsyncThunk(
  'moviesPopular/fetchMovies',
  async () => {
    const moviesLatest = await getMoviePopular();
    return moviesLatest.results;
  },
);

export const { start, success, error } = moviesSlice.actions;
export const selectMoviesLists = (state: RootState) => state.movies;
const moviesListReducer = moviesSlice.reducer;
export default moviesListReducer;
