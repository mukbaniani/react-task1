import Count from '../Count';
import './App.css';
import ChangeBgColor from './ChangeBgColor';
import { useState } from 'react';


function Greeting({title, short_description}){

    const [color, setColor] = useState('white');

    const dark = (event) => {
        setColor('dark');
    }

    const info = (event) => {
        setColor('info');
    }

    const red = (event) => {
        setColor('red');
    }

    const green = (event) => {
        setColor('green');
    }

    const yellow = (event) => {
        setColor('yellow');
    }

    const blue = (event) => {
        setColor('blue');
    }

    const white = (event) => {
        setColor('white');
    }

    return (
        <div className="container mt-2">
            <ChangeBgColor color='dark' text='dark background' onClick={dark} />
            <ChangeBgColor color='info' text='aqua background' onClick={info} />
            <ChangeBgColor color='danger' text='red background' onClick={red} />
            <ChangeBgColor color='success' text='green background' onClick={green} />
            <ChangeBgColor color='warning' text='yellow background' onClick={yellow} />
            <ChangeBgColor color='primary' text='blue background' onClick={blue} />
            <ChangeBgColor color='' text='white background' onClick={white} />
            <div className={`header-${color} text-center mt-4`}>
                <h1>{title}</h1>
                <article>
                    {short_description}
                </article>
            </div>
            <Count number='0' />
        </div>
    )
}

export default Greeting;