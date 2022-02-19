import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Header from './Header'
import TextMessagesTable from './TextMessagesTable'

const TextMessages = () => {

    const [textMessages, setTextMessages] = useState([])
    const [filteredTextMessages, setFilteredTextMessages] = useState([])
    useEffect(() => {
        const fetchTextMessages = async () => {
            const fetchedTextMessages = await Axios.get('http://localhost:1378/api/text/')
       
            console.log(fetchedTextMessages)
            setTextMessages(fetchedTextMessages.data)
            setFilteredTextMessages(fetchedTextMessages.data)
        }
        
        fetchTextMessages()
    }, [])
    return (
        <div>
      < Header />
      <TextMessagesTable filteredTextMessages={filteredTextMessages} setFilteredTextMessages={setFilteredTextMessages} />
    {/* <Footer /> */}
 </div>
    )
}

 export default TextMessages