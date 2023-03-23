import { Link } from "react-router-dom";
import '../styles/components/_notFound.scss';

const NotFound = () => {
    return (
        <div className="notFound">
            <Link to='/'>Inicio</Link>
        </div>
    )
}

export default NotFound;