import AddRatingModal from "./RatingModal";
import { FC, useState } from "react";
import { ListItemProps } from "./ListItem";

export const Selected: FC<{
  item: ListItemProps;
  onClick: (b: ListItemProps) => void;
  onDelete: () => void;
  index: number;
  onUpdateRating: (movieTitle: string, newRating: number) => void;
}> = ({ item, onClick, onDelete, index, onUpdateRating }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("open modal button clicked")
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="col-sm-6 col-md-3 mb-3 mx-2">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title" role="button" onClick={() => onClick(item)}>
            {item.title}
          </h5>
          <p role="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample-${index}`} aria-controls={`collapseExample-${index}`}>Ratings: </p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#addRatingModal-${item.title}`} onClick={openModal}>Add Rating</button>
          <ul id={`collapseExample-${index}`} className="collapse list-group">
            {item.Ratings.map((rating, index) => (
              <li className="list-group-item" key={index}>
                {rating}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={onDelete}>Delete</button>
        </div>
      </div>

      <AddRatingModal
        key={item.title}
        movieTitle={item.title}
        onAddRating={(rating) => {
          onUpdateRating(item.title, rating);
          closeModal(); 
        }}
        isModalOpen={isModalOpen} 
        closeModal={closeModal} 
      />
    </div>
  );
};
