import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import SearchSelector from "../components/SearchSelector";
import SearchBox from "../components/SearchBox";
import TextMessagesTable from "../components/TextMessagesTable";
import CreateTextMessage from "../components/CreateTextMessage";
import Footer from "../components/Footer";

const TextMessages = () => {
  const [textMessages, setTextMessages] = useState([]);
  const [filteredTextMessages, setFilteredTextMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("id");
  const [isLoading, setIsLoading] = useState(true);
  const [messageCreated, setMessageCreated] = useState(false);

  useEffect(() => {
    const fetchTextMessages = async () => {
      const fetchedTextMessage = await axios.get(
        "http://localhost:1378/api/text/"
      );

      setTextMessages(fetchedTextMessage.data);
      setFilteredTextMessages(fetchedTextMessage.data);
      setIsLoading(false);
    };

    fetchTextMessages();
  }, [messageCreated]);

  useEffect(() => {
    if (filterBy === "contactCount") {
      setFilteredTextMessages(
        textMessages.filter(
          (textMessage) => textMessage.contactTexts.length >= Number(searchTerm)
        )
      );
    } else {
      setFilteredTextMessages(
        textMessages.filter((textMessage) =>
          textMessage[filterBy]
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [textMessages, searchTerm, filterBy]);

  const handleChangeSearchBox = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeFilterBy = (event) => {
    setFilterBy(event.target.value);
  };

  const selectorMenuItems = [
    { value: "id", name: "Id" },
    { value: "textMessage", name: "Message" },
    { value: "messageStatus", name: "Status" },
    { value: "contactCount", name: "Number of Contacts" },
  ];

  if (isLoading === true) return <div>Loading...</div>;

  return (
    // Holds our entire textMessages page
    <>
      <Grid
        className="textMessagesPage"
        container
        sx={{ px: 4 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
      >
        <Header />
        <Grid className="searchArea" container spacing={2} sx={{ py: 2 }}>
          <SearchSelector
            menuItems={selectorMenuItems}
            name="Filter by"
            value={filterBy}
            onChange={handleChangeFilterBy}
          />
          <SearchBox
            value={searchTerm}
            onChange={handleChangeSearchBox}
            name="Search Text Messages:"
          />
        </Grid>
        <Grid className="textMessagesTable" container>
          <Grid item xs={12}>
            <TextMessagesTable filteredTextMessages={filteredTextMessages} />
          </Grid>
        </Grid>
        <CreateTextMessage setMessageCreated={setMessageCreated} messageCreated={messageCreated}/>
      </Grid>

       
      
    </>
  );
};

export default TextMessages;
