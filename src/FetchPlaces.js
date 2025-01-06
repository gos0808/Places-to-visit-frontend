import axios from 'axios';

export const getPlaces = (setPlaces) => {
axios.get('https://places-to-visit-backend-2.onrender.com')
    .then(({ data }) => {
        setPlaces(data)
    })
    .catch((error) => {
        console.log("Error fetching data:",error);
    });
};

export const savePlace = ({name, province, description, image, setName, setProvince, setDescription, setImage, setPlaces}) => {  axios.post('https://places-to-visit-backend-2.onrender.com/savePlace', {name, province, description, image})
    .then(() => {

        setName('');
        setProvince('');
        setDescription('');
        setImage(['']);

        getPlaces(setPlaces)
    })
    .catch((error) => {
        console.log("Error saving data:", error);
    });
}

export const editPlace = ({id, name, province, description, image, setName, setProvince, setDescription, setImage, setEdititng, setPlaces}) => {
axios.put(`https://places-to-visit-backend-2.onrender.com/editPlace`, {_id: id, name, province, description, image})
    .then(({ data }) => {

        setName('');
        setProvince('');
        setDescription('');
        setImage(['']);
        setEdititng(false);

        getPlaces(setPlaces)
    })
    .catch((error) => {
        console.log("Error editing data:", error);
    });
}

export const deletePlaces = ({id, setPlaces}) => {
    const _id = id; 
    axios.delete(`https://places-to-visit-backend-2.onrender.com/deletePlace/${_id}`)
        .then(({ data }) => {
            getPlaces(setPlaces)
        })
        .catch((error) => {
            console.log("Error deleting data:",error);
        });
    };