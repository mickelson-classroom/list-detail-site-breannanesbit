import { FC, FormEvent, useState } from "react";
import { ListItemProps } from "./ListItem"
import { GenericTextInput } from "./GenericInput";
import { GenericSelectInput } from "./InputForm";
import { GenericRadioInput } from "./RadioInput";

export const EditForm: FC<{
    selectedMovie: ListItemProps;
    updateMovie: (movie: ListItemProps) => void;
}> = ({ selectedMovie, updateMovie }) => {
    const [title, setTitle] = useState(selectedMovie?.title || "");
    const [description, setDescription] = useState(selectedMovie?.description || "");
    const [genre, setGenre] = useState(selectedMovie?.genre || "");
    const [liked, setLiked] = useState('');

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        updateMovie({
            ...selectedMovie,
            title: title,
            description: description,
            genre: genre,
            liked: liked
        });
    };

    return (
        <form onSubmit={submitHandler} className="needs-validation" noValidate>
            <div className='row'>
                <div className='col-lg-6 col-md-4'>
                    <GenericTextInput GI={{
                        id: 7,
                        name: "desTitle",
                        label: "Title",
                        value: `${title}`,
                        isValid: true,
                        validationText: "Thank you for providing a Title",
                        onChange: (t) => setTitle(t)
                    }} />

                </div>
                <div className='col-lg-6 col-md-4'>
                    <GenericTextInput GI={{
                        id: 8,
                        name: "desDes",
                        label: "Description",
                        value: `${description}`,
                        isValid: true,
                        validationText: "Thank you for providing a Description",
                        onChange: (t) => setDescription(t)
                    }} />
                </div>
                <div className='col-lg-6 col-md-4'>
                    <GenericSelectInput
                        GSI={{
                            id: 9,
                            name: "genreSelect",
                            label: "Genre",
                            value: `${genre}`,
                            onChange: (g) => setGenre(g),
                            option: ["Adventure", "Sci-fi", "Musical", "Romance", "Comedy"]
                        }}
                    />
                </div>
                <div className='col-lg-6 col-md-4'>
                    <GenericRadioInput GRI={{
                        id: 10,
                        name: "likedSelect",
                        overallLabel: "Did you like this movie",
                        options:
                            [{ id: 12, label: "Yes", value: "Yes" },
                            { id: 13, label: "No", value: "No" }],
                        selectedOption: `${liked}`,
                        onChange: (k) => setLiked(k)
                    }} />
                </div>
                <button className="btn btn-primary col-auto" type="submit">
                    Save
                </button>
            </div>
        </form>
    )
}
