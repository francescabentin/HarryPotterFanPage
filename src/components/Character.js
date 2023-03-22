import {
    Link
} from "react-router-dom";
const Character = ({ eachChar }) => {

    return (
        <Link to={`/character/${eachChar.id}`}>
        <li>
            <img src={eachChar.image} alt="imagen" />
            <p>{eachChar.name}</p>
            <p>{eachChar.species}</p>
            <p>{eachChar.house}</p>
        </li>
        </Link>
    )
}

export default Character;