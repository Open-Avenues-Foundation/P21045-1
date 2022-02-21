import React, {useEffect, useState} from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import Footer from './Footer'
import BasicGrid from './BasicGrid'
import CustomizedInputs from './CustomizedInputs'
import DataTable from './DataTable'
import TextMessagesTable from './TextMessagesTable'

const TextMessages = () => {
/*
    //const [TextMessages, setTextMessages] = useState([])
    const [filteredTextMessages, setFilteredTextMessages] = useState([])
    useEffect(() => {
        const fetchTextMessages = async () => {
            const fetchedContact = await Axios.get('http://localhost:1378/api/contact/')
       
            console.log(fetchedContact)
            setTextMessages(fetchedContact.data)
            setFilteredTextMessages(fetchedContact.data)
        }
        
        fetchTextMessages()
    }, [])
    */
    return (
        <div>
      <ResponsiveAppBar />
      <BasicGrid />
 </div>
    )
}

 export default TextMessages