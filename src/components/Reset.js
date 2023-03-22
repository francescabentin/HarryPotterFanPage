const Reset = (liftingReset) => {

    const handleResetEvent = (ev) => {
        liftingReset(ev);
    }
    return (
        <>
            <button onClick={handleResetEvent}>Reset</button>
        </>
    )
}

export default Reset;