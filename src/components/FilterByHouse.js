import '../styles/components/_filter.scss';

const FilterByHouse = ({ liftingSelect, house }) => {

    const handleSelectEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSelect(value);
    }

    return (
        <fieldset className="section__form__house">
            <label className="section__form__house__label">Select a House</label>
            <select className="section__form__house__select" onChange={handleSelectEvent} value={house}>
                <option value='Gryffindor'>Grifindor</option>
                <option value='Hufflepuff'>Hufflepuff</option>
                <option value='Slytherin'>Slytherin</option>
            </select>
        </fieldset>
    )


}

export default FilterByHouse;