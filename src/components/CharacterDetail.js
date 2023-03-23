import { Link } from "react-router-dom";
import image from "../images/welp.webp";
import { matchPath, useLocation } from "react-router-dom";
import "../styles/components/_eachChar.scss";

const CharacterDetail = ({ filteredList }) => {
    const handleBackHistory = () => {
        window.history.back();
    };

    // character detail
    const { pathname } = useLocation();
    const dataUrl = matchPath("/character/:id", pathname);
    const charId = dataUrl !== null ? dataUrl.params.id : null;
    const foundChar = filteredList.find((char) => char.id === charId);

    return (
        <div className="div_character">
            {foundChar != null ? (
                <>
                    <div className="character">
                        <h2 className="h2">Wizard Details</h2>
                        <img
                            className="character__img"
                            src={foundChar.image}
                            alt="imagen"
                        />
                        <p className="character__p">{foundChar.name}</p>
                        <p className="character__p">{foundChar.species}</p>
                        <p className="character__p">{foundChar.house}</p>
                    </div>
                    <Link className="link" onClick={handleBackHistory} to="/">
                        Back
                    </Link>
                </>
            ) : (
                <>
                    <div className="noexist">
                            <h2 className="title">WHO ARE YOU SPYING!!!</h2>
                        <img className="img" src={image} alt="imagen" />
                        <Link className="link" onClick={handleBackHistory} to="/">
                            Volver
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default CharacterDetail;
