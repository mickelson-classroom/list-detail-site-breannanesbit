import React, { useState } from 'react';
import ListItem, { ListItemProps, movies } from './ListItem';
import { Selected } from './Selected';

const List: React.FC = () => 
{
  const [newItem, setNewItem] = useState<string>('');
  const [items, setItems] = useState<ListItemProps[]>(movies);
  const [selectedMovie, setSelectedMovie] = useState<ListItemProps | undefined>();

  // const handleAddItem = (title: string, des: string) => {

  //   setItems([...items, newItem]);
  //   setNewItem('');
  // };

  const handleDeleteItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>List</h2>
      
      {/* <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      /> 
      <button onClick={handleAddItem}>Add Item</button>
      */}

        {selectedMovie && (
          <div>
            <div>{selectedMovie.title}</div>
            <div>{selectedMovie.description}</div>
            </div>
        )}
    {items.map((i, index) => (
      <Selected onClick={(m) => setSelectedMovie(m)} key={i.title} item={i} onDelete={() => handleDeleteItem(index)}      />
    ))}
    </div>
  );
};

export default List;
