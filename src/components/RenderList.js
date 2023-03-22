import Character from "./Character";
import loadImage from './images/loading2.gif';


const RenderList = ({ charactersList, isLoading }) => {

    const mainList = () => {
        return charactersList.map((eachChar) => (
        <Character eachChar={eachChar} key={eachChar.id} />
    ));
    }

    const message = () => {
        return "No characters found matching the search";
    }

    return (
        <section>
            {isLoading === true ? (
                <img src={loadImage} alt="Imagen de un spinner indicando que los datos se están cargando" />
            ) : (
                <ul> {charactersList.length === 0 ? message() : mainList()} </ul>
            )}
        </section>
    );
};

export default RenderList;
