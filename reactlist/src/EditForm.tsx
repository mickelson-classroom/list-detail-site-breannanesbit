import { FC, FormEvent, useState } from "react";
import { ListItemProps } from "./ListItem"

export const EditForm: FC<{
    selectedMovie: ListItemProps;
    updateMovie: (movie: ListItemProps) => void;
}> = ({ selectedMovie, updateMovie }) => {
    const [title, setTitle] = useState(selectedMovie?.title || "");
    const [description, setDescription] = useState(selectedMovie?.description || "");

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        updateMovie({
            ...selectedMovie,
            title: title, 
            description: description,
        });
    };

    return (
        <form onSubmit={submitHandler} className="needs-validation" noValidate>
            <div className='row'>
                <div className='col-lg-6 col-md-4'>
                    <label htmlFor='desTitle' className='form-label'>Title</label>
                    <input
                        name="desTitle"
                        className='form-control is-valid'
                        value={title}
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <div id='titleinput' className='valid-feedback'>
                        Thank you for providing a Title
                    </div>
                </div>
                <div className='col-lg-6 col-md-4'>
                    <label htmlFor='desDes' className='form-label'>Description</label>
                    <input
                        name="desDes"
                        className='form-control is-valid'
                        value={description}
                        type='text'
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <div id='titleinput' className='valid-feedback'>
                        Thank you for providing a Description
                    </div>
                </div>
                <button className="btn btn-primary col-auto" type="submit">
                    Save
                </button>
            </div>
        </form>
    )
}
