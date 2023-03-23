import '../styles/components/_filter.scss';

const FilterByName = ({ liftingSearch, search }) => {

    const handleSearchEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSearch(value)
    }


    return (
        <fieldset className="section__form__search">
            <label>Search a character</label> <input className='section__form__search__input' onChange={handleSearchEvent} value={search} />
        </fieldset>
    )

}

export default FilterByName;