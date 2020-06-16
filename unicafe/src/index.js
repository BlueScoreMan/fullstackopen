import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const Statistics = (props) => {
    return <div>{props.text} {props.value}</div>
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState([])

    const handleGood = () => {
        setAll(all.concat(1))
        setGood(good + 1)
    }

    const handleNeutral = () => {
        setAll(all.concat(0))
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setAll(all.concat(-1))
        setBad(bad + 1)
    }

    const calcAvg = () => {
        if (all.length !== 0) {
            return ((good - bad) / all.length)
        }
    }

    const calcPositive = () => {
        if (all.length !== 0) {
            // .length at the end of .filter to not get an array
            const positive = all.filter(x => x === 1).length / all.length * 100
            return `${positive} %`
        }
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGood} text={"good"}/>
            <Button onClick={handleNeutral} text={"neutral"}/>
            <Button onClick={handleBad} text={"bad"}/>

            <h1>statistics</h1>
            <Statistics text={"good"} value={good}/>
            <Statistics text={"neutral"} value={neutral}/>
            <Statistics text={"bad"} value={bad}/>
            <Statistics text={"all"} value={all.length}/>
            <Statistics text={"average"} value={calcAvg()}/>
            <Statistics text={"positive"} value={calcPositive()}/>

        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)