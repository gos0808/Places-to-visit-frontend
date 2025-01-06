import { savePlace, editPlace } from "./FetchPlaces";

const Form = ({ toggleComponent, setPlaces, editing, id, name, province, description, image, setName, setProvince, setDescription, setImage, setEdititng}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        editing ? 
        editPlace({id, name, province, description, image, setName, setProvince, setDescription, setImage, setEdititng, setPlaces}): 
        savePlace({name, province, description, image, setName, setProvince, setDescription, setImage, setPlaces});

        toggleComponent();
    };


    return (
        <div className="form-overlay">
            <form 
            onSubmit = {handleSubmit}>

                <h1>{editing ? 'Edit place' : 'Add place'}</h1>

                <button
                    className="close-btn"
                    onClick={toggleComponent}
                    type="button"
                >
                    &times;
                </button>

                <input
                    type="text"
                    placeholder="Place name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Description"
                    rows="8"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                >
                </textarea>

                <textarea
                    placeholder="Place links"
                    rows="8"
                    value={image.join(',')}
                    onChange={(e) => setImage(e.target.value.split(',').map((url) => url.trim()))}
                    required
                >
                </textarea>

                <button type="submit"
                >
                    {editing ? 'Save changes' : 'Add'}
                </button>
            </form>
        </div>
    );
};

export default Form;