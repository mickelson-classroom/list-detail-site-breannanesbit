import React from 'react';

export interface ListItemProps {
  title: string;
  description: string;
  Ratings: number[];
};

export const movies: ListItemProps[] = [
  {
    title: "Seven brides for seven brothers",
    description: "about seven red head brothers who need women",
    Ratings: [7,5,6.5,8.5]
  },
  {
    title: "Second hand lions",
    description: "about a boy who lives with his crazy great uncles",
    Ratings: [5,3,8,4.5]
  },
  {
    title: "Transformers",
    description: "alien living robots",
    Ratings: [6,7,6,7]
  }
];

export default movies;
