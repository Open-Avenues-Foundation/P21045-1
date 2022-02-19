import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Header from './Header'
import ContactsTable from './ContactsTable'

const Contacts = () => {

    const [contacts, setContacts] = useState([])
    const [filteredContacts, setFilteredContacts] = useState([])
    useEffect(() => {
        const fetchContacts = async () => {
            const fetchedContact = await Axios.get('http://localhost:1378/api/contact/')
       
            console.log(fetchedContact)
            setContacts(fetchedContact.data)
            setFilteredContacts(fetchedContact.data)
        }
        
        fetchContacts()
    }, [])
    return (
        <div>
      < Header />
      <ContactsTable filteredContacts={filteredContacts} setFilteredContacts={setFilteredContacts} />
    {/* <Footer /> */}
 </div>
    )
}

 export default Contacts