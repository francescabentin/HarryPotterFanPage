import { Link } from 'react-router-dom';
import image from '../images/welp.webp';
import { matchPath, useLocation } from 'react-router-dom';

const CharacterDetail = ({ filteredList }) => {

    const handleBackHistory = () => {
        window.history.back();
    }

    // character detail
    const { pathname } = useLocation();
    const dataUrl = matchPath("/character/:id", pathname);
    const charId = dataUrl !== null ? dataUrl.params.id : null;
    const foundChar = filteredList.find((char) => char.id === charId);

    return (
        <div>
            {foundChar != null ?
                (<> 
            <h2>detalle de contacto</h2>
            <img src={foundChar.image} alt="imagen" />
            <p>{foundChar.name}</p>
            <p>{foundChar.species}</p>
            <p>{foundChar.house}</p>
            <Link onClick={handleBackHistory} to="/">Volver</Link>
                </>)
                : (<>
                    <h2>este personaje no exsite</h2>
                    <img src={image} alt="imagen" />
                    <Link onClick={handleBackHistory} to="/">Volver</Link>
                </>)
            }
        </div>
    )
}

export default CharacterDetail;