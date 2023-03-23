import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FiltersByGender from './FilterByGender';
import '../styles/components/_filter.scss';

const Filters = ({ liftingSearch, search, liftingSelect, house, liftingGender, gender }) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <FilterByName
                liftingSearch={liftingSearch}
                search={search}
            />
            <FilterByHouse
                liftingSelect={liftingSelect}
                house={house}
            />
            <FiltersByGender
                liftingGender={liftingGender}
                gender={gender}
            />
        </form>
    )
}

export default Filters;