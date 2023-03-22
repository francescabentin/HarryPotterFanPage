import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";

const Filters = ({ liftingSearch, search, liftingSelect, house }) => {


    return (
        <form>
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