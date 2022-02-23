import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import SearchSelector from "../components/SearchSelector";
import SearchBox from "../components/SearchBox";
import ContactsTable from "../components/ContactsTable";
import CreateContact from "../components/CreateContact";
import Footer from "../components/Footer";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("id");

  useEffect(() => {
    const fetchContacts = async () => {
      const fetchedContact = await axios.get(
        "http://localhost:1378/api/contact/"
      );

      setContacts(fetchedContact.data);
      setFilteredContacts(fetchedContact.data);
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    if (filterBy === "lastOrder") {
      setFilteredContacts(
        contacts.filter(
          (contact) => Number(searchTerm) <= Number(contact.lastOrder)
        )
      );
    } else {
      setFilteredContacts(
        contacts.filter((contact) =>
          contact[filterBy]
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [contacts, searchTerm, filterBy]);

  const handleChangeSearchBox = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeFilterBy = (event) => {
    setFilterBy(event.target.value);
  };

  const selectorMenuItems = [
    { value: "id", name: "Id" },
    { value: "firstName", name: "First name" },
    { value: "lastName", name: "Last name" },
    { value: "phoneNumber", name: "Phone number" },
    { value: "email", name: "Email" },
    { value: "city", name: "City" },
    { value: "homeState", name: "State" },
    { value: "lastOrder", name: "Last order price" },
  ];

  return (
    // Holds our entire contacts page
    <Grid className="contactsPage" container sx={{px: 4}}
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Header />
      <Grid className="searchArea" container spacing={2} sx={{py: 2}} >
        <SearchSelector
          menuItems={selectorMenuItems}
          name="Filter by"
          value={filterBy}
          onChange={handleChangeFilterBy}
        />
        <SearchBox
          value={searchTerm}
          onChange={handleChangeSearchBox}
          name="Search Contacts"
        />
      </Grid>
      <Grid className="contactsTable" container>
        <Grid item xs={12} sx={{}}>
          <ContactsTable filteredContacts={filteredContacts} />
        </Grid>
      </Grid>
      <CreateContact />
    </Grid>
  );
};

export default Contacts;
