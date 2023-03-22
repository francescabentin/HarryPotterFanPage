const FilterByGender = ({ liftingGender, gender }) => {

    const handleGenderEvent = (ev) => {
        const value = ev.currentTarget.value;
        liftingGender(value);
    }

    return (
        <>
            <input
                onChange={handleGenderEvent}
                checked={gender === 'female'}
                type="radio"
                name="female"
                id="female"
                value="female"
            />
            <input
                onChange={handleGenderEvent}
                checked={gender === 'male'}
                type="radio"
                name="male"
                id="male"
                value="male"
            />
        </>
    )
}

export default FilterByGender;