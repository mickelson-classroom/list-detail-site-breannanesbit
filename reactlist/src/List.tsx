import React, { FormEvent, useEffect, useState } from 'react';
import ListItem, { ListItemProps, movies } from './ListItem';
import { Selected } from './Selected';
import { Filter } from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EditForm } from './EditForm';
import { GenericTextInput } from './GenericInput';
import { GenericSelectInput } from './InputForm';


const List: React.FC = () => {
  const [newItemTitle, setNewItemTitle] = useState<string>('');
  const [newItemDes, setNewItemDes] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [items, setItems] = useState<ListItemProps[]>(movies);
  const [selectedMovie, setSelectedMovie] = useState<ListItemProps | undefined>();
  const [filter, setFilter] = useState<string>('');
  const [ClickCount, setClickCount] = useState<number>(1);
  const [filteredItems, setFilteredItems] = useState<ListItemProps[]>(movies);

  const [movie, setMovies] = useState<ListItemProps[]>(/* ... */);

  const updateRating = (movieTitle: string, newRating: number) => {
    const updatedMovies = filteredItems.map((movie) => {
      if (movie.title === movieTitle) {
        return {
          ...movie,
          Ratings: [...movie.Ratings, newRating],
        };
      }
      return movie;
    });
    setFilteredItems(updatedMovies)
  };


  const handleAddItem = (e: FormEvent) => {
    const newItem: ListItemProps = {
      id: items.length + 1,
      title: newItemTitle,
      description: newItemDes,
      genre: genre,
      liked: "Yes",
      Ratings: []
    };

    setFilteredItems((perItem) => [...perItem, newItem]);

    setNewItemTitle('');
    setNewItemDes('');
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  useEffect(() => {
    // Filter the items based on the filter string
    const filteredItems = items.filter((m) =>
      m.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredItems(filteredItems);
  }, [items, filter]);

  const updateMovie = (newMovie: ListItemProps) => {
    setFilteredItems((oldMovies) =>
      oldMovies.map((m => m.id === newMovie.id ? newMovie : m)))
  }

  const updateMovieAndItems = (newMovie: ListItemProps) => {
    // Update the selectedMovie state
    setSelectedMovie(newMovie);

    // Update the items list
    setItems((oldMovies) =>
      oldMovies.map((m) => (m.id === newMovie.id ? newMovie : m))
    );
  };

  return (
    <div>
      <h2>Movies</h2>
      <Filter onChange={(filter) => setFilter(filter)} />

      <div className='row justify-content-center'>
        {filteredItems.map((i, index) => (
          <Selected
            onUpdateRating={(t, r) => updateRating(t, r)}
            onClick={(m) => setSelectedMovie(m)}
            key={i.title}
            item={i}
            onDelete={() => handleDeleteItem(index)}
            index={index}
          />
        ))}
      </div>
      <div className="container">
        <div className="row g-3 align-items-center ">
          {selectedMovie && (
            <div className='border border-4 rounded-5 p-3 bg-dark-subtle"'>
              <h3>{selectedMovie.title}</h3>
              <h6>{selectedMovie.description}</h6>
              <h6>{selectedMovie.genre}</h6>
              <div>
              <h6>Liked:</h6>
              <h6>{selectedMovie.liked}</h6>
              </div>

              <EditForm
                key={selectedMovie.id}
                selectedMovie={selectedMovie}
                updateMovie={(newMovie) => updateMovieAndItems(newMovie)} />
            </div>
          )}

          <div className='border border-4 rounded-5 p-3 bg-dark-subtle"'>
            <h3>Add New Movie</h3>
            <form onSubmit={handleAddItem}>
              <div className='row'>

                <div className="col-md-3 col-lg-4">
                  <GenericTextInput GI={{
                    id: 9,
                    name: "desTitle",
                    label: "Title",
                    value: `${newItemTitle}`,
                    isValid: true,
                    validationText: "Thank you for providing a Title",
                    onChange: (t) => setNewItemTitle(t)
                  }} />
                </div>
                <div className="col-md-3 col-lg-4">
                  <GenericTextInput GI={{
                    id: 10,
                    name: "des",
                    label: "Description",
                    value: `${newItemDes}`,
                    isValid: true,
                    validationText: "Thank you for providing a Description",
                    onChange: (t) => setNewItemDes(t)
                  }} />

                </div>
                <div className="col-md-3 col-lg-4">
                <GenericSelectInput
                        GSI={{
                            id:9,
                            name:"genreSelect",
                            label:"Genre",
                            value:`${genre}`,
                            onChange: (g) => setGenre(g),
                            option: ["Adventure", "Sci-fi", "Musical", "Romance", "Comedy"]
                        }}
                        />
                </div>
                <div className="col-12 col-md-2 mt-2">
                  <button className="btn btn-primary" type="submit">
                    Add Item
                  </button>

                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default List;
