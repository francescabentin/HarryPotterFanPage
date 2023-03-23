import '../styles/components/_filter.scss';

const FilterByGender = ({ liftingGender, gender }) => {

    const handleGenderEvent = (ev) => {
        const value = ev.currentTarget.value;
        liftingGender(value);
    }

    return ( 
        <fieldset className="form__gender">
            <label>Fem</label><input
                onChange={handleGenderEvent}
                checked={gender === 'female'}
                type="radio"
                name="female"
                id="female"
                value="female"
            />
            <label>Male</label><input
                onChange={handleGenderEvent}
                checked={gender === 'male'}
                type="radio"
                name="male"
                id="male"
                value="male"
            />
        </fieldset> 
    )
}

export default FilterByGender;