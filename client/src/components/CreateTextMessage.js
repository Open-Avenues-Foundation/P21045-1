import { Autocomplete, Grid, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CreateTextMessage() {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [newMessageBody, setNewMessageBody] = useState("")

    useEffect(() => {
        const fetchContacts = async () => {
            const fetchedContact = await axios.get(
                "http://localhost:1378/api/contact/"
            );

            console.log(fetchedContact.data);

            setContacts(fetchedContact.data);
        };

        fetchContacts();
    }, []);

    const createTextMessage = async (event) => {
        event.preventDefault()

        if (!selectedContacts.length) return null

        if (!newMessageBody) return null

        const newTextMessage = await axios.post('http://localhost:1378/api/text', { textMessage: newMessageBody })

        const { id } = newTextMessage.data

        selectedContacts.forEach(async (contact) => {
            const newContactText = await axios.post('http://localhost:1378/api/contactText', { textMessageId: id, contactId: contact.id })

            console.log(newContactText)
        })


    }



    return (
        <Grid item xs={10} sx={{py: 2}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
              <Typography>Create New Text Message</Typography>
                </AccordionSummary>
     
        <AccordionDetails>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} xs={{ pt: 5 }}>
            <Grid xs={10} item>
                <TextField
                    fullWidth
                    placeholder="Create your text message..."
                    value={newMessageBody}
                    onChange={(event) => setNewMessageBody(event.target.value)}
                />
            </Grid>
            <Grid xs={10} item>
                <Autocomplete
                    multiple
                    autoSelect
                    autoHighlight
                    id="createTextMessageAutoComplete"
                    options={contacts}
                    getOptionLabel={(contact) =>
                        `${contact.firstName} ${contact.lastName}`
                    }
                    onChange={(event, newValue) => setSelectedContacts(newValue)}
                    renderOption={(props, contact) => {
                        return (
                            <li {...props} key={contact.id}>
                                {`${contact.firstName} ${contact.lastName}`}
                            </li>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth

                            variant="standard"
                            label="Contacts"
                            placeholder="Contacts to add.."
                        />
                    )}
                />
            </Grid>
            <Grid xs={3} item>
                <Button onClick={createTextMessage}>Create campaign</Button>
            </Grid>
        </Grid>
            </AccordionDetails>
            </Accordion>
        </Grid>
    );
}
