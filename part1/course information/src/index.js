import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}


const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}

const Content = ({course}) => {
    return (
        <div>
            {course.parts.map(x => <Part key={x.id} name={x.name} exercises={x.exercises}/>)}
        </div>
    )
}

const Total = (props) => {
    const sum = props.course.parts.reduce((aggregator, order) => aggregator + order.exercises, 0)
    return (<b>total of {sum} exercises</b>);

}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course}/>
}

ReactDOM.render(<App/>, document.getElementById('root'))