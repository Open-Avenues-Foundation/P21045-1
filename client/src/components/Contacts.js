import React, {useEffect, useState} from 'react'
import Axios from 'axios'

const Contacts = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchContacts = async () => {
            const fetchedContact = await Axios.get('http://localhost:1378/api/contact/')
       
            console.log(fetchedContact)
            setContacts(fetchedContact.data)
        }
        
        fetchContacts()
    }, [])
    return (
        <div>
        <h1> <u>Contacts</u> </h1>
        <h2>{contacts.map(contact => {
            return(
                <p>{contact.firstName} {contact.email}</p>
            )
        })}</h2>
 </div>
    )
}

 export default Contacts