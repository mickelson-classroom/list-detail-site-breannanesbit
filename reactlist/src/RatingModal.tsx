import React, { useState } from 'react';

interface AddRatingModalProps {
  movieTitle: string;
  onAddRating: (rating: number) => void;
  isModalOpen: boolean;
  closeModal: () => void;
}

const AddRatingModal: React.FC<AddRatingModalProps> = ({ movieTitle, onAddRating, isModalOpen, closeModal }) => {
  const [rating, setRating] = useState<string>('');

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
};

const handleSubmit = () => {
    onAddRating(parseFloat(rating));
    setRating('')
    closeModal()
  };

  return (
    <div
    className={`modal fade${isModalOpen ? ' show' : ''}`} 
    id={`addRatingModal-${movieTitle}`}
    tabIndex={-1}
    aria-labelledby={`exampleModalLabel-${movieTitle}`}
    aria-hidden={!isModalOpen} 
      >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id={`exampleModalLabel-${movieTitle}`}>Add Rating for {movieTitle}</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeModal} 
          ></button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              className="form-control"
              id="rating"
              value={rating}
              onChange={handleRatingChange}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={closeModal} 
             >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
            data-bs-dismiss="modal"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default AddRatingModal;
