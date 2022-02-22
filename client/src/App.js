import Contacts from "./pages/Contacts";
import TextMessages from "./pages/TextMessages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/textmessages' element={ <TextMessages />} />
        <Route  path='/contacts' element={<Contacts/>} />
        <Route  path='/' element={<Contacts/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
