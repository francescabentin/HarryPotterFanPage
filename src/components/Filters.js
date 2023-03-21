const Filters = ({ liftingSearch, search }) => {

    const handleSearchEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSearch(value)
    }


    return (
        <form>
            <label>Buscar por personaje:</label> <input onChange={handleSearchEvent} value={search} />
            <label>Seleccionar la casa:</label>
            <select>
                <option>Grifindor</option>
                <option>Hufflepuff</option>
                <option>Slytherin</option>
            </select>
        </form>
    )
}

export default Filters;