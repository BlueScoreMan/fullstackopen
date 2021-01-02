import React from 'react'
import Person from "./Person";

const Filter = (props) => {
    let result = ''
    if (props.newFilter.trim() !== '') {
        props.persons
            .filter((person) => person.name.toLowerCase().includes(props.newFilter.toLowerCase()))
            .map((foundPerson) =>
                result = <ul><Person key={foundPerson.name} person={foundPerson}/></ul>
            )
        return result
    }

    return (
        <ul>
            {props.persons.map((person) =>
                <Person key={person.name} person={person}/>
            )}
        </ul>
    )
}
export default Filter