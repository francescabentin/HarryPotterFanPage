import '../styles/components/_filter.scss';

const FilterByHouse = ({ liftingSelect, house }) => {

    const handleSelectEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSelect(value);
    }

    return (
        <fieldset className="form__house">
            <label>Filter by House</label>
            <select onChange={handleSelectEvent} value={house}>
                <option value='Gryffindor'>Grifindor</option>
                <option value='Hufflepuff'>Hufflepuff</option>
                <option value='Slytherin'>Slytherin</option>
            </select>
        </fieldset>
    )


}

export default FilterByHouse;