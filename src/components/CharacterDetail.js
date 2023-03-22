const CharacterDetail = ({ foundChar }) => {


    return (
        <>
            <h2>detalle de contacto</h2>
            <img src={foundChar.image} alt="imagen" />
            <p>{foundChar.name}</p>
            <p>{foundChar.species}</p>
            <p>{foundChar.house}</p>
        </>
    )
}

export default CharacterDetail;