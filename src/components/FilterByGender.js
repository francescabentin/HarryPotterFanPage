import '../styles/components/_filter.scss';

const FilterByGender = ({ liftingGender, gender }) => {

    const handleGenderEvent = (ev) => {
        const value = ev.currentTarget.value;
        liftingGender(value);
    }

    return ( 
        <fieldset className="section__form__gender">
            <label className="section__form__gender__label">Fem</label><input className="section__form__gender__input"
                onChange={handleGenderEvent}
                checked={gender === 'female'}
                type="radio"
                name="female"
                id="female"
                value="female"
            />
            <label className="section__form__gender__label">Male</label><input className="section__form__gender__input"
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