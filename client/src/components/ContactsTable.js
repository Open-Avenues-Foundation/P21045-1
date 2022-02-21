import React, {useState, useEffect} from 'react';
import BasicGrid from './BasicGrid'
import DataTable from './DataTable';


const ContactsTable = (props) => {
const { filteredContacts, setFilteredContacts, selectedContacts } = props 
const [inputBox, setInputBox] = useState('')
const [dropDownSelector, setDropDownSlector] = useState('')
/*
// todo: make state that holds value of input box

const setSelectedContacts = ()=>{
// this is the function that updates the piece of state selectedContacts
// it will set the value of the selectedContacts piece of state equal
//to the contents of the input box = ?? is this correct?
}

useEffect(() => {
// this will change the 
})

// todo: useEffect() that updates the filtered contacts to only contain the contatcs
// that include our search term
// todo: Make a componenet that allows you to create contact
// todo: Make a search box that changes the state made on line 5 
// todo: make a table that displays these contacts

*/
return(
    <div>
        <DataTable />
    </div>
       
)
}

export default ContactsTable 