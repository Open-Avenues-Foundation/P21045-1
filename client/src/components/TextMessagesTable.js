import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid'; 
import { Button } from '@mui/material';
import axios from 'axios';

const sendText = async (textMessage) => {
    const textSent = await axios.post(`http://localhost:1378/api/text/${textMessage.id}`)

    console.log(textSent)
}

const TextMessagesTable = (props) => {
const { filteredTextMessages } = props 

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'textMessage', headerName: 'Message Text', width: 350 },
    { field: 'updatedAt', headerName: 'Date Sent', width: 200 },
    { field: 'messageStatus', headerName: 'Status', width: 125 },
    { field: 'contactsTexts', headerName: '# of Contacts', width: 175, valueGetter: (params) => {return params.row.contactTexts.length} },
    { field: 'startButton', headerName: 'Send Text', width: 175, renderCell: (textMessage) => {
        return <Button onClick={() => sendText(textMessage)}>Send</Button>
    }}

]

return(
    <DataGrid
        rows={filteredTextMessages}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight {...filteredTextMessages}
      />
)
}

export default TextMessagesTable 