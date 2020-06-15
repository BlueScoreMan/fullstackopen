import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const Display = (props) => {
    return <div>{props.text} {props.value}</div>
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGood} text={"good"}/>
            <Button onClick={handleNeutral} text={"neutral"}/>
            <Button onClick={handleBad} text={"bad"}/>

            <h1>statistics</h1>
            <Display text={"good"} value={good}/>
            <Display text={"neutral"} value={neutral}/>
            <Display text={"bad"} value={bad}/>

        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)