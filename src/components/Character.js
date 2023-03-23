import { Link } from "react-router-dom";
import '../styles/components/_charDetail.scss';


const Character = ({ eachChar }) => {
    return (
        <Link to={`/character/${eachChar.id}`}>
            <li className="character">
                <img className="character__img" src={eachChar.image} alt="imagen" />
                <p className="character__p" >{eachChar.name}</p>
                <p className="character__p" >{eachChar.species}</p>
                <p className="character__p" >{eachChar.house}</p>
            </li>
        </Link>
    );
};

export default Character;
