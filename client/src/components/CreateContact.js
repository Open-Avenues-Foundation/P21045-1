import { Grid, Button, FormControl, TextField , Alert} from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'

const Error = () => {
  return (
  <Grid item xs={12}>
  <Alert severity="error">Please input all values before submitting!</Alert>
</Grid>
  )
}

const Success = (props) => {
  const { createdContact } = props
  return (
  <Grid item xs={12}>
  <Alert severity="success">Contact ID:{createdContact.id} created! </Alert>
</Grid>
  )
}

const CreateContact = () => {
  const defaultContactState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    homeState: "",
    lastOrder: "",
    lastOrderDate: ""
  }

  const [newContact, setNewContact] = useState(defaultContactState)
  const [validationError, setValidationError] = useState(false)
  const [contactCreated, setContactCreated] = useState(false)
  const [createdContact, setCreatedContact] = useState({})

  const createContact = async (event) => {
    event.preventDefault()
    setValidationError(false)
    setContactCreated(false)

    const {firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate} = newContact

    if(!firstName || !lastName || !phoneNumber || !email || !city || !homeState || !lastOrder || !lastOrderDate) {
      return setValidationError(true)
    }
    const postedContact = await axios.post('http://localhost:1378/api/contact', newContact)
    setCreatedContact(postedContact.data)
    setContactCreated(true)
    console.log(postedContact.data)

  }

  return (
    <Grid className="createContactForm" container spacing={2}>
        {validationError && <Error/>}
        {contactCreated && <Success createdContact={createdContact} />}
        <Grid item xs={3}>
          <Grid item xs={6}>
          <TextField
            id="firstName"
            value={newContact.firstName}
            onChange={(event) => setNewContact({...newContact, firstName: event.target.value}) }
            label={"First Name"}
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            id="lastName"
            value={newContact.lastName}
            onChange={(event) => setNewContact({...newContact, lastName: event.target.value}) }
            label={"Last Name"}
          />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid item xs={6}>
          <TextField
            id="phoneNumber"
            value={newContact.phoneNumber}
            onChange={(event) => setNewContact({...newContact, phoneNumber: event.target.value}) }
            label={"Phone Number"}
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            id="email"
            value={newContact.email}
            onChange={(event) => setNewContact({...newContact, email: event.target.value}) }
            label={"Email"}
          />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid item xs={6}>
          <TextField
            id="city"
            value={newContact.city}
            onChange={(event) => setNewContact({...newContact, city: event.target.value}) }
            label={"City"}
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            id="homeState"
            value={newContact.homeState}
            onChange={(event) => setNewContact({...newContact, homeState: event.target.value}) }
            label={"State"}
          />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid item xs={6}>
          <TextField
            id="lastOrder"
            value={newContact.lastOrder}
            onChange={(event) => setNewContact({...newContact, lastOrder: event.target.value}) }
            label={"Last Order Price"}
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            id="lastOrderDate"
            value={newContact.lastOrderDate}
            onChange={(event) => setNewContact({...newContact, lastOrderDate: event.target.value}) }
            label={"Last Order Date"}
          />
          </Grid>
        </Grid>
        <Grid xs={3} item>
          <Button onClick={createContact}>Create Contact</Button>
        </Grid>
    </Grid>
  );
};

export default CreateContact;
