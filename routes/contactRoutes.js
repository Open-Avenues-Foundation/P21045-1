//Contact Routes
app.get('/', getAllContacts)
app.get('/', getSpecificContacts)
app.get('/', saveContact)
app.get('/', deleteContact)
app.get('/', addContact) //post
app.get('/', uploadCSV)
//Needs to:
//A: Accepts CSV file in a post route,
//B: Parse CSV file and finds all the contacts in the file and corrects any data issues
  //(e.g: special characters in an email address, unformatted phone numbers)
//C: Save them in the Database