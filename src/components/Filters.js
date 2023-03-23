import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FiltersByGender from './FilterByGender';
import '../styles/components/_filter.scss';


const Filters = ({ setSearch, setHouse, setGender, liftingSearch, search, liftingSelect, house, liftingGender, gender }) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    const handleReset = () => {
        setHouse('gryffindor');
        setGender("");
        setSearch('');
    }
    return (
        <section className="section">
            <form className="section__form" onSubmit={handleSubmit}>
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
                <button className="reset" onClick={handleReset}>reset</button>
        </form>
        </section>
    )
}

export default Filters;