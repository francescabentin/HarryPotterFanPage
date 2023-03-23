import { Link } from "react-router-dom";
import '../styles/components/_notFound.scss';
import img from '../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className="notFound">
            <Link className="notFound__link" to='/'>Back</Link>
            <img className="notFound__img" src={img}></img>
        </div>
    )
}

export default NotFound;