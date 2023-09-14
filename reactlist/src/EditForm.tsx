import { FC, FormEvent, useState } from "react";
import { ListItemProps } from "./ListItem"
import { GenericTextInput } from "./GenericInput";

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
                    <GenericTextInput GI={{
                        id:7,
                        name: "desTitle",
                        label: "Title",
                        value: `${title}`,
                        isValid: true,
                        validationText: "Thank you for providing a Title",
                        onChange: (t) => setTitle(t) 
                    }}/>
                    
                </div>
                <div className='col-lg-6 col-md-4'>
                <GenericTextInput GI={{
                        id:8,
                        name: "desDes",
                        label: "Description",
                        value: `${description}`,
                        isValid: true,
                        validationText: "Thank you for providing a Description",
                        onChange: (t) => setDescription(t) 
                    }}/>
                    
                </div>
                <button className="btn btn-primary col-auto" type="submit">
                    Save
                </button>
            </div>
        </form>
    )
}
