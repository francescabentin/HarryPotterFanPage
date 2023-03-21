import Character from "./Character";

const RenderList = ({ charactersList }) => {
    const mainList = charactersList.map((eachChar) => (
        <Character eachChar={eachChar} key={eachChar.id} />
    ));
    return (
        <section>
            <ul> {mainList} </ul>
        </section>
    );
};

export default RenderList;
