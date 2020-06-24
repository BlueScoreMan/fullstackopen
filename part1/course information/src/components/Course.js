import React from "react";

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

export default Course