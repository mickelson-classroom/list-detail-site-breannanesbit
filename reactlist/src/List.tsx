import React, { FormEvent, useEffect, useState } from 'react';
import ListItem, { ListItemProps, movies } from './ListItem';
import { Selected } from './Selected';
import { Filter } from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EditForm } from './EditForm';


const List: React.FC = () => {
  const [newItemTitle, setNewItemTitle] = useState<string>('');
  const [newItemDes, setNewItemDes] = useState<string>('');
  const [newItemYear, setNewItemYear] = useState<number>();
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


  const handleAddItem = () => {
    const newItem: ListItemProps = {
      id: 3,
      title: newItemTitle,
      description: newItemDes,

      Ratings: []
    };

    setItems([...items, newItem]);

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
                  <label htmlFor="title" className="col-form-label">Title:</label>
                  <input
                    name='title'
                    aria-describedby="titleinput"
                    className="form-control is-invalid"
                    type="text"
                    id="title"
                    required
                    value={newItemTitle}
                    onChange={(e) => setNewItemTitle(e.target.value)}
                  />
                  <div id='titleinput' className='invalid-feedback'>
                    You must provide a Title
                  </div>
                </div>
                <div className="col-md-3 col-lg-4">
                  <label htmlFor="des" className="col-form-label">Description:</label>
                  <input
                    name='des'
                    aria-describedby="desinput"
                    className={`form-control ${newItemDes === "" ? "is-invalid" : ""}`}
                    type="text"
                    id="des"
                    required
                    value={newItemDes}
                    onChange={(e) => setNewItemDes(e.target.value)}
                  />
                  <div className='invalid-feedback'>
                    You must give a description
                  </div>

                </div>
                <div className="col-md-3 col-lg-4">
                  <label htmlFor="year" className="col-form-label">Year:</label>
                  <input
                    name='year'
                    aria-describedby="desinput"
                    className="form-control is-invalid"
                    type="text"
                    id="year"
                    required
                    value={newItemYear}
                    onChange={(e) => setNewItemYear(parseFloat(e.target.value))}
                  />
                  <div className='invalid-feedback'>
                    You must give a description
                  </div>

                  {/* <div className="col-md-3">
                  <input
                  className="form-control is-invalid"
                  type="text"
                  id="title"
                  required
                  value={newItemTitle}
                  onChange={(e) => setNewItemTitle(e.target.value)}
                  />
                  <div id='titleinput' className='invalid-feedback'>
                  You must provide a Title
                  </div>
                </div> */}

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
