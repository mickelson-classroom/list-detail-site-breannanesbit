import React from 'react';

export interface ListItemProps {
  id: number;
  title: string;
  description: string;
  Ratings: number[];
};

export const movies: ListItemProps[] = [
  {
    id: 1,
    title: "Seven brides for seven brothers",
    description: "about seven red head brothers who need women",
    Ratings: [7,5,6.5,8.5]
  },
  {
    id:2,
    title: "Second hand lions",
    description: "about a boy who lives with his crazy great uncles",
    Ratings: [5,3,8,4.5]
  },
  {
    id:3,
    title: "Transformers",
    description: "alien living robots",
    Ratings: [6,7,6,7]
  }
];

export default movies;
