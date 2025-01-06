import NewSliders from './NewSliders.js';
import { FaRegEdit } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

const Place = ({ id, place, i, handleEdit, handleDelete}) => {

    const { name, province, description, image } = place;

    return (
        <div key={id}>
            <h2>{i + 1} {name}</h2>
            <p>{province}</p>
            <p>{description}</p>
            <NewSliders images={image} name={name} />
            <div>
                <button onClick={() => handleEdit(place)}>
                <FaRegEdit />
                    Edit
                </button>

                <button onClick={() => handleDelete(id)}>
                    <FaRegCheckSquare />
                    Mark as visited
                </button>
            </div>

        </div>);
};

export default Place;