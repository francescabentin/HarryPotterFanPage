import Character from "./Character";
import loadImage from '../images/loading2.gif';
import '../styles/components/_container.scss';
import PropTypes from 'prop-types';


const RenderList = ({ charactersList, isLoading }) => {

    const mainList = () => {
        return charactersList.map((eachChar) => (
            <Character eachChar={eachChar} key={eachChar.id} />
    ));
    }

    const message = () => {
        return <div className="characterNotFound">"No characters found matching the search"</div>;
    }

    return (
        <section className="container">
            {isLoading === true ? (
                <img src={loadImage} alt="Imagen de un spinner indicando que los datos se están cargando" />
            ) : (
                    <ul className="container__grid"> {charactersList.length === 0 ? message() : mainList()} </ul>
            )}
        </section>
    );
};


RenderList.propTypes = {
    eachChar: PropTypes.object,
};

export default RenderList;
