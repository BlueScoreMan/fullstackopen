import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// Destructuring here
// And simplifying return since it has only one return argument
const Display = ({counter}) => <div>{counter}</div>

// Same here tbh
const Buttons = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
    const [counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <Display counter={counter}/>
            <Buttons handleClick={increaseByOne} text='plus'/>
            <Buttons handleClick={decreaseByOne} text='subtract'/>
            <Buttons handleClick={setToZero} text='clear'/>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)