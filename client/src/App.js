import "./App.css";
import Contacts from "./components/Contacts";
import TextMessages from "./components/TextMessages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/textmessage' element={ <TextMessages />} />
        <Route  path='/contacts' element={<Contacts/>} />
        <Route  path='/' element={<Contacts/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
