const Reset = (liftingReset) => {

    const handleResetEvent = (ev) => {
        liftingReset(ev);
    }
    return (
        <>
            <button onClick={handleResetEvent}>RESET</button>
        </>
    )
}

export default Reset;