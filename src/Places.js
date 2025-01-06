import { useState, useEffect } from 'react';
import Place from './Place.js';
import { getPlaces, deletePlaces } from './FetchPlaces';
import { IoMdAdd } from "react-icons/io";
import Form from "./Form";

function Places() {
    const [places, setPlaces] = useState([]);
    const [editing, setEditing] = useState(false);
    const [isComponentVisible, setComponentVisible] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [province, setProvince] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState([]);

    useEffect(() => {
        getPlaces(setPlaces);

    }, []);

    const toggleComponent = () => {
        setComponentVisible(!isComponentVisible);
    };

    const handleEdit = (place) => {
        setEditing(true);

        setId(place._id);
        setName(place.name);
        setProvince(place.province);
        setDescription(place.description);
        setImage(place.image);

        toggleComponent();
    };

    const handleDelete = (id) => {
        deletePlaces({id, setPlaces});
    };

    return (
        <div className='App'>

            {isComponentVisible && <Form
                toggleComponent={toggleComponent}
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                province={province}
                setProvince={setProvince}
                description={description}
                setDescription={setDescription}
                image={image}
                setImage={setImage}
                editing={editing}
                setPlaces={setPlaces}
                setEdititng={setEditing}
            />}

            <h1>{places.length} places to visit in Canada</h1>
            <div>
                <button className="btn-new"
                    onClick={() => {
                        setEditing(false);
                        toggleComponent();

                    }}
                >
                    <IoMdAdd />
                    Add new place
                </button>
            </div >

            <div>
                {places.map((place, i) => (
                    <Place
                        i={i}
                        key={place._id}
                        id={place._id}
                        place={place}
                        handleEdit={() => handleEdit(place)}
                        handleDelete={handleDelete}
                    />
                ))}
            </div >

        </div >
    );
}

export default Places;