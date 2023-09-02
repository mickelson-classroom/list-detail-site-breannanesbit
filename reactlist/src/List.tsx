import React, { useEffect, useState } from 'react';
import ListItem, { ListItemProps, movies } from './ListItem';
import { Selected } from './Selected';
import { Filter } from './Filter';

const List: React.FC = () => {
  const [newItemTitle, setNewItemTitle] = useState<string>('');
  const [newItemDes, setNewItemDes] = useState<string>('');
  const [items, setItems] = useState<ListItemProps[]>(movies);
  const [selectedMovie, setSelectedMovie] = useState<ListItemProps | undefined>();
  const [filter, setFilter] = useState<string>('');
  const [ClickCount, setClickCount] = useState<number>(1);
  const [filteredItems, setFilteredItems] = useState<ListItemProps[]>(movies);

  const handleAddItem = () => {
    const newItem: ListItemProps = {
      title: newItemTitle,
      description: newItemDes,
    };
    
    // Update the items state
    setItems([...items, newItem]);

    // Clear the input values
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

  return (
    <div>
      <h2>List</h2>
      <Filter onChange={(filter) => setFilter(filter)} />

      {selectedMovie && (
        <div>
          <div>{selectedMovie.title}</div>
          <div>{selectedMovie.description}</div>
        </div>
      )}
      {filteredItems.map((i, index) => (
        <Selected
          onClick={(m) => setSelectedMovie(m)}
          key={i.title}
          item={i}
          onDelete={() => handleDeleteItem(index)}
        />
      ))}

      <div>
        <label htmlFor='title'>Title:</label>
      <input
        type="text"
        id='title'
        value={newItemTitle}
        onChange={(e) => setNewItemTitle(e.target.value)}
        />
        <label htmlFor='des'>Description:</label>
      <input
        type="text"
        id='des'
        value={newItemDes}
        onChange={(e) => setNewItemDes(e.target.value)}
        />

      <button onClick={() => handleAddItem()}>Add Item</button>
        </div>
    </div>
  );
};

export default List;
