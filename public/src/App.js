import React from 'react'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Login from "./pages/Login"; 
import Chat from "./pages/Chat";  
import SetAvtar from './pages/SetAvtar';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Chat/>}/>
    <Route path="/" element={<Navigate to="/chat" />} /> {/* or <Chat /> */}
        <Route path="/setAvAtar" element={<SetAvtar/>}/>
     
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
//No shared layout or nested content.
// when👉 "Always show the layout, and inside it, swap pages."

// //then
// <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route index element={<Home />} />
//     <Route path="about" element={<About />} />
//     <Route path="contactUs" element={<Contact />} />
//   </Route>
// </Routes>