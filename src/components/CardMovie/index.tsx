import React from 'react';

import * as S from './styles';

interface ICardMovie {
  poster_path: string;
  original_title: string;
}

const CardMovie = ({ poster_path, original_title }: ICardMovie) => {
  return (
    <S.Card>
      <S.BannerMovie
        source={{ uri: `https://image.tmdb.org/t/p/w1280${poster_path}` }}
      />
      <S.TextInfo>{original_title}</S.TextInfo>
    </S.Card>
  );
};

export default CardMovie;
