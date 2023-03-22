import { Link } from 'react-router-dom';

const CharacterDetail = ({ foundChar }) => {

    const handleBackHistory = () => {
        window.history.back();
    }

    return (
        <>
            <h2>detalle de contacto</h2>
            <img src={foundChar.image} alt="imagen" />
            <p>{foundChar.name}</p>
            <p>{foundChar.species}</p>
            <p>{foundChar.house}</p>
            <Link onClick={handleBackHistory} to="/">Volver</Link>
        </>
    )

}

export default CharacterDetail;