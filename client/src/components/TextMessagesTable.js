import React from 'react'
import BasicGrid from './BasicGrid'
import DataTable from './DataTable'

const TextMeassagesTable = (props) => {
const { filteredTextMessages, setFilteredTextMessages } = props
// todo: make state that holds value of input box \ search term

// todo: useEffect() that updates the filtered text message to only contain the text messages
// that include our search term

// todo: Make a componenet that allows you to create text messages

// todo: Make a search box that changes the state made on line 5 

// todo: make a table that displays these text message

return(
    <div>
        Text Messages Table Here
        <BasicGrid />
        <DataTable />
    </div>
)
}

export default  TextMeassagesTable 