import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid'; 


const ContactsTable = (props) => {
const { filteredContacts } = props 

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 175 },
    { field: 'lastName', headerName: 'Last Name', width: 175 },
    { field: 'phoneNumber', headerName: 'Phone number', width: 175 },
    { field: 'email', headerName: 'Email', width: 175 },
    { field: 'city', headerName: 'City', width: 175 },
    { field: 'homeState', headerName: 'State', width: 100 },
    { field: 'lastOrder', headerName: 'Last Order Price', width: 175 },
    { field: 'lastOrderDate', headerName: 'Last Order Date', width: 175 },
]

return(
    <DataGrid
        rows={filteredContacts}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight {...filteredContacts}
      />
)
}

export default ContactsTable 