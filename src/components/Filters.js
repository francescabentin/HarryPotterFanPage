import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";

const Filters = ({ liftingSearch, search, liftingSelect, house }) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FilterByName
                liftingSearch={liftingSearch}
                search={search}
            />
            <FilterByHouse
                liftingSelect={liftingSelect}
                house={house}
            />
        </form>
    )
}

export default Filters;