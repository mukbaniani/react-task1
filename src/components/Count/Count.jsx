import { useState } from 'react';
import Buttons from '../Buttons';

function Count(){

    const [count, setCount] = useState(0);

    const addOne = (event) =>{
        setCount(count + 1);
    }

    const addFive = (event) => {
        setCount(count + 5);
    }

    const addhundred = (event) => {
        setCount(count + 100);
    }

    const subtractionOne = (event) => {
        setCount(count - 1);
    }

    const subtractionFive = (event) => {
        setCount(count - 5);
    }

    const subtractionhundred = (event) => {
        setCount(count - 100);
    }

    return (
        <div className="container">
            <h2 className="text-center">count {count}</h2>
            <Buttons type='success' event='+1' onClick={addOne} />
            <Buttons type='success' event='+5' onClick={addFive} />
            <Buttons type='success' event='+100' onClick={addhundred} />
            <Buttons type='danger' event='-1' onClick={subtractionOne} />
            <Buttons type='danger' event='-5' onClick={subtractionFive} />
            <Buttons type='danger' event='-100' onClick={subtractionhundred} />
        </div>
    )
}

export default Count;