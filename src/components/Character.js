const Character = ({ eachChar }) => {

    return (
        <li>
            <img src={eachChar.image} alt="imagen" />
            <p>{eachChar.name}</p>
            <p>{eachChar.species}</p>
            <p>{eachChar.house}</p>
        </li>
    )
}

export default Character;