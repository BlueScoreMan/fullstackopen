import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.text}
    </button>
)

const App = (props) => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    const History = ({allClicks}) => {
        if (allClicks.length === 0) {
            return (
                <div>
                    <p>press buttons to unlock full potential of the application</p>
                </div>
            )
        }

        return (
            <div>
                <p> button press history: {allClicks.join(" ")}</p>
            </div>
        )
    }

    return (
        <div>
            <div>
                <Display value={left}/>
                <Button onClick={handleLeftClick} text={"left"}/>
                <Button onClick={handleRightClick} text={"right"}/>
                <Display value={right}/>
                <History allClicks={allClicks}/>
            </div>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)