import api from '../api';

export interface ResponseGetMovie {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page?: number;
  results: ResultMovie[];
}

export interface ResultMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMovieNowPlaying = async (): Promise<ResponseGetMovie> => {
  const response = await api.get('/now_playing');
  return response.data;
};

export const getMoviePopular = async (): Promise<ResponseGetMovie> => {
  const response = await api.get('/movie/popular');
  return response.data;
};

export const getMovieLatest = async (): Promise<ResponseGetMovie> => {
  const response = await api.get('/latest');
  return response.data;
};
