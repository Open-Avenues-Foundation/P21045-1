import React, {useEffect, useState} from 'react';
// import ResponsiveAppBar from './ResponsiveAppBar'
import BasicGrid from './BasicGrid';
import DataTable from './DataTable';


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
      <BasicGrid />
      <DataTable />
 </div>
    )
}

 export default Contacts