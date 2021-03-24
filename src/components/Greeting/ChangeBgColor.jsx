
function ChangeBgColor({color, text, onClick}){
    return (
        <div className='display-inline-block'>
            <button className={`btn btn-${color} mt-2`} onClick={onClick}>{text}</button>
        </div>
    )
}

export default ChangeBgColor;