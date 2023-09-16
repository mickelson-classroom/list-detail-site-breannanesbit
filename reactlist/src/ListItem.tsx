import React from 'react';

export interface ListItemProps {
  id: number;
  title: string;
  description: string;
  genre: string;
  Ratings: number[];
  liked: string
};

export const movies: ListItemProps[] = [
  {
    id: 1,
    title: "Seven brides for seven brothers",
    description: "about seven red head brothers who need women",
    genre: "musical",
    Ratings: [7,5,6.5,8.5],
    liked: "Yes"
  },
  {
    id:2,
    title: "Second hand lions",
    description: "about a boy who lives with his crazy great uncles",
    genre: "adventure",
    Ratings: [5,3,8,4.5],
    liked: "Yes"
  },
  {
    id:3,
    title: "Transformers",
    description: "alien living robots",
    genre: "Sci-fi",
    Ratings: [6,7,6,7],
    liked: "yes"
  }
];

export default movies;
