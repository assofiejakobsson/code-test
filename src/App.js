import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Container from "react-bootstrap/Container";
import Users from "./components/Users"
import Login from "./components/Login"
import ButtonBar from "./components/ButtonBar"

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <BrowserRouter>
    <Container className="p-3">
      <h1>Demo</h1>
      <h2>
        <ButtonBar/>
      </h2>
      <h2>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Login" exact element={<Login/>}/>   
      </Routes>
      </h2>
    </Container>
    </BrowserRouter>
  );
};

export default App;