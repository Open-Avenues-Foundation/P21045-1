import { Autocomplete, Grid, Button, TextField, Alert } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CreateTextMessage(props) {
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [newMessageBody, setNewMessageBody] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [createdMessage, setCreatedMessage] = useState({});
  const { setMessageCreated, messageCreated } = props;

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
    event.preventDefault();
    setValidationError(false);
    setMessageCreated(false);

    if (!selectedContacts.length) return setValidationError(true);

    if (!newMessageBody) return setValidationError(true);

    const newTextMessage = await axios.post("http://localhost:1378/api/text", {
      textMessage: newMessageBody,
    });

    const { id } = newTextMessage.data;

    selectedContacts.forEach(async (contact) => {
      const newContactText = await axios.post(
        "http://localhost:1378/api/contactText",
        { textMessageId: id, contactId: contact.id }
      );

      console.log(newContactText);
    });

    setCreatedMessage(newTextMessage.data);
    setMessageCreated(true);
  };

  const Error = () => {
    return (
      <Grid onClick={resetForm} item xs={12}>
        <Alert  severity="error">
          Please input all values before submitting!
        </Alert>
      </Grid>
    );
  };

  const Success = (props) => {
    const { createdMessage } = props;
    return (
      <Grid onClick={resetForm} item xs={12}>
        <Alert severity="success">
          Message ID:{createdMessage.id} created!{" "}
        </Alert>
      </Grid>
    );
  };

  const resetForm = () => {
      setValidationError(false)
      setMessageCreated(false)
      setCreatedMessage({})
      setSelectedContacts([])
      setNewMessageBody("")
  };

  return (
    <Grid item xs={10} sx={{ py: 2 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Create New Text Message</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid
            container
            direction="row"
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
            alignContent="center"
            spacing={2}
            
          >
            {validationError && <Error />}
            {messageCreated && <Success createdMessage={createdMessage} />}
            <Grid xs={12} item>
              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                label="Message Body:"
                value={newMessageBody}
                onChange={(event) => setNewMessageBody(event.target.value)}
              />
            </Grid>
            <Grid xs={12} item>
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
                    console.log(props)
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
                    InputLabelProps={{ shrink: true }}
                    label="Contacts"
                    placeholder="Contacts to add.."
                  />
                )}
              />
            </Grid>
            <Grid xs={4} item>
              <Button onClick={createTextMessage}>Create campaign</Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
