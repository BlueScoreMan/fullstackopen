import React from 'react'
import PersonForm from "./components/PersonForm";

const App = () => {
    return (
        <div>
            <h2>Phonebook</h2>
            {PersonForm()}
        </div>
    )
}

export default App