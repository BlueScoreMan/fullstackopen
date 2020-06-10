import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <>
            <Part part={props.part} exercise={props.exercise}/>
        </>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>{props.part} {props.exercise}</p>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course}/>
            <Content part={part1.name} exercise={part1.exercises}/>
            <Content part={part2.name} exercise={part2.exercises}/>
            <Content part={part3.name} exercise={part3.exercises}/>
            <Total total={part1.exercises + part2.exercises + part3.exercises}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))