import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(6));
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
    const [winner, setWinner] = useState(0)

    const handleQuote = () => {
        setSelected(getRandomInt())
    }

    const handleVote = () => {
        const copy = {...points}
        copy[selected] += 1
        setPoints(copy)
        handleRank(copy)
    }

    const handleRank = (copy) => {
        for (let i = 0; i < Object.keys(copy).length; i++) {
            if (copy[winner] < copy[i]) {
                setWinner(selected)
            }
        }
    }

    return (
        <div>
            <button onClick={handleQuote}>next quote</button>
            <button onClick={handleVote}>vote</button>

            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            has {points[selected]} votes

            <h1>Anecdote with most votes</h1>
            {props.anecdotes[winner]}
            has {points[winner]} votes
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)