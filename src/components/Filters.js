const Filters = ({ liftingSearch, search, liftingSelect, house }) => {

    const handleSearchEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSearch(value)
    }

    const handleSelectEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSelect(value);
    }


    return (
        <form>
            <label>Buscar por personaje:</label> <input onChange={handleSearchEvent} value={search} />
            <label>Seleccionar la casa:</label>
            <select onChange={handleSelectEvent} value={house}>
                <option value='Gryffindor'>Grifindor</option>
                <option value='Hufflepuff'>Hufflepuff</option>
                <option value='Slytherin'>Slytherin</option>
            </select>
        </form>
    )
}

export default Filters;