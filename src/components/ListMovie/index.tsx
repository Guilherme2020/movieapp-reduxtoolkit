import React from 'react';
import { FlatList } from 'react-native';
import { ResponseGetMovie } from '../../api/services/moviesServices';
import CardMovie from '../CardMovie';

const ListMovie = ({ results }: ResponseGetMovie) => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={results}
      style={{ flex: 1, marginTop: 20 }}
      horizontal
      renderItem={({ item }) => (
        <CardMovie
          original_title={item.original_title}
          key={item.title}
          poster_path={item.backdrop_path}
        />
      )}
    />
  );
};

export default ListMovie;
