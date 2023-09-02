import React from 'react';

export interface ListItemProps {
  title: string;
  description: string;
};

export const movies: ListItemProps[] = [
  {
    title: "Seven brides for seven brothers",
    description: "about seven red head brothers who need women",
  },
  {
    title: "Second hand lions",
    description: "about a boy who lives with his crazy great uncles",
  },
  {
    title: "Transformers",
    description: "alien living robots",
  }
];

export default movies;
