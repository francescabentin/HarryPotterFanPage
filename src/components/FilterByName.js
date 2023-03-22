const FilterByName = ({ liftingSearch, search }) => {

    const handleSearchEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSearch(value)
    }


    return (
        <>
            <label>Buscar por personaje:</label> <input onChange={handleSearchEvent} value={search} />
        </>
    )

}

export default FilterByName;