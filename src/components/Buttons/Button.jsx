function Buttons({onClick, type, event}){
    return (
        <div>
            <button className={`btn btn-${type} w-100 mt-2`} onClick={onClick}>
                {event}
            </button>
        </div>
    )
}

export default Buttons;