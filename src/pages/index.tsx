import React, { useEffect } from 'react';
import ListMovie from '../components/ListMovie';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchMovies, selectMoviesLists } from '../redux/reducers/moviesSlice';
import * as S from './styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const { moviesList } = useAppSelector(selectMoviesLists);

  useEffect(() => {
    async function getMovie() {
      await dispatch(fetchMovies());
    }
    getMovie();
  }, [dispatch]);

  return (
    <S.Container>
      <S.Title>Filmes Populares</S.Title>

      <ListMovie results={moviesList} />
    </S.Container>
  );
};

export default Home;
