import Character from "./Character";

const RenderList = ({ charactersList }) => {
    const mainList = charactersList.map((eachChar) => (
        <Character eachChar={eachChar} />
    ));
    return (
        <section>
            <ul> {mainList} </ul>
        </section>
    );
};

export default RenderList;
