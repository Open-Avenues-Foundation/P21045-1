import React, {useEffect, useState} from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import Footer from './Footer'
import BasicGrid from './BasicGrid'
import CustomizedInputs from './CustomizedInputs'
import DataTable from './DataTable'
import ContactsTable from './ContactsTable'

const Contacts = () => {
/*
    //const [contacts, setContacts] = useState([])
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
    */
    return (
        <div>
      <ResponsiveAppBar />
      <BasicGrid />
 </div>
    )
}

 export default Contacts