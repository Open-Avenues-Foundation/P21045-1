import {
  Grid,
  Button,
  FormControl,
  TextField,
  Alert,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CreateContact = (props) => {
  const defaultContactState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    homeState: "",
    lastOrder: "",
    lastOrderDate: "",
  };

  const {setContactCreated, contactCreated} = props

  const [newContact, setNewContact] = useState(defaultContactState);
  const [validationError, setValidationError] = useState(false);
  const [createdContact, setCreatedContact] = useState({});

  const createContact = async (event) => {
    event.preventDefault();
    setValidationError(false);
    setContactCreated(false);

    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      city,
      homeState,
      lastOrder,
      lastOrderDate,
    } = newContact;

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !city ||
      !homeState ||
      !lastOrder ||
      !lastOrderDate
    ) {
      return setValidationError(true);
    }
    const postedContact = await axios.post(
      "http://localhost:1378/api/contact",
      {...newContact, LastOderDate: new Date(newContact.lastOrderDate)}
    );
    setCreatedContact(postedContact.data);
    setContactCreated(true);
    console.log(postedContact.data);
  };

  const Error = () => {
    return (
      <Grid item xs={12} onClick={resetForm}>
        <Alert severity="error">Please input all values before submitting!</Alert>
      </Grid>
    );
  };
  
  const Success = (props) => {
    const { createdContact } = props;
    return (
      <Grid item xs={12} onClick={resetForm}>
        <Alert severity="success">Contact ID:{createdContact.id} created! </Alert>
      </Grid>
    );
  };

  const resetForm = () => {
    setContactCreated(false)
    setValidationError(false)
    setCreatedContact({})
    setNewContact(defaultContactState)
  }

  return (
    <Grid item  sx={{ py: 2 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Create New Contact</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid
            className="createContactForm"
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={{ pt: 5 }}
          >
            {validationError && <Error />}
            {contactCreated && <Success createdContact={createdContact} />}
              <Grid item xs={3}>
                <TextField
                  id="firstName"
                  InputLabelProps={{ shrink: true }}
                  value={newContact.firstName}
                  onChange={(event) =>
                    setNewContact({
                      ...newContact,
                      firstName: event.target.value,
                    })
                  }
                  fullWidth
                  label={"First Name"}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="lastName"
                  InputLabelProps={{ shrink: true }}
                  value={newContact.lastName}
                  onChange={(event) =>
                    setNewContact({
                      ...newContact,
                      lastName: event.target.value,
                    })
                  }
                  fullWidth
                  label={"Last Name"}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="phoneNumber"
                  InputLabelProps={{ shrink: true }}
                  value={newContact.phoneNumber}
                  onChange={(event) =>
                    setNewContact({
                      ...newContact,
                      phoneNumber: event.target.value,
                    })
                  }
                  fullWidth
                  label={"Phone Number"}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="email"
                  InputLabelProps={{ shrink: true }}
                  value={newContact.email}
                  onChange={(event) =>
                    setNewContact({ ...newContact, email: event.target.value })
                  }
                  fullWidth
                  label={"Email"}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="city"
                  InputLabelProps={{ shrink: true }}
                  value={newContact.city}
                  onChange={(event) =>
                    setNewContact({ ...newContact, city: event.target.value })
                  }
                  fullWidth
                  label={"City"}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                InputLabelProps={{ shrink: true }}
                  id="homeState"
                  value={newContact.homeState}
                  onChange={(event) =>
                    setNewContact({
                      ...newContact,
                      homeState: event.target.value,
                    })
                  }
                  fullWidth
                  label={"State"}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                InputLabelProps={{ shrink: true }}
                  id="lastOrder"
                  value={newContact.lastOrder}
                  onChange={(event) =>
                    setNewContact({
                      ...newContact,
                      lastOrder: Number(event.target.value),
                    })
                  }
                  fullWidth
                  label={"Last Order Price"}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                InputLabelProps={{ shrink: true }}
                  id="lastOrderDate"
                  value={newContact.lastOrderDate}
                  onChange={(event) =>
                    setNewContact({
                      ...newContact,
                      lastOrderDate: event.target.value,
                    })
                  }
                  fullWidth
                  label={"Last Order Date"}
                />
              </Grid>

       
              <Button sx={{my:2}} onClick={createContact}>Create Contact</Button>

          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default CreateContact;
