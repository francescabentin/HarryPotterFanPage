const FilterByHouse = ({ liftingSelect, house }) => {



    const handleSelectEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSelect(value);
    }

    return (
        <>
            <label>Seleccionar la casa:</label>
            <select onChange={handleSelectEvent} value={house}>
                <option value='Gryffindor'>Grifindor</option>
                <option value='Hufflepuff'>Hufflepuff</option>
                <option value='Slytherin'>Slytherin</option>
            </select>
        </>
    )


}

export default FilterByHouse;