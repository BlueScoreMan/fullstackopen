import React, {useState} from 'react'
import Filter from "./Filter";

const PersonForm = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '122-232-34'},
        {name: 'Bob Miller', number: '222-111-00'},
        {name: 'Elizabeth Strange', number: '456-123-23'},
        {name: 'Peter Parker', number: '123-456-98'},
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (checkRedundancy(newName)) {
            const personObject = {
                date: new Date().toISOString(),
                name: newName,
                number: newNumber
            }

            setPersons(persons.concat(personObject))
            setNewName('')
        }
    }

    const checkRedundancy = (newName) => {
        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} is already added to the phonebook`)
            return false
        }
        return true
    }

    return (
        <div>
            <div>
                filter: <input value={newFilter} onChange={handleFilterChange}/>
            </div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {<Filter newFilter={newFilter} persons={persons}/>}
        </div>
    )
}

export default PersonForm
