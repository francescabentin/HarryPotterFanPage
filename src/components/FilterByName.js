import '../styles/components/_filter.scss';

const FilterByName = ({ liftingSearch, search }) => {

    const handleSearchEvent = (ev) => {
        const value = ev.currentTarget.value
        liftingSearch(value)
    }


    return (
        <fieldset className="form__search">
            <label>Filter by Name</label> <input className='form__search__input' onChange={handleSearchEvent} value={search} />
        </fieldset>
    )

}

export default FilterByName;