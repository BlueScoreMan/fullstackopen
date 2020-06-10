import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <>
            <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/>
            <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>
        </>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercise}</p>
    )
}

const Total = (props) => {
    const list = props.parts
    const total = list[0].exercises + list[1].exercises + list[2].exercises
    return (
        <p>Number of exercises {total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))