import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import CoffeeTypes from "./Pages/CoffeeTypes.jsx";
import BeanTypes from "./Pages/BeanTypes.jsx";
import Benefits from "./Pages/Benefits.jsx";
import History from "./Pages/History.jsx";
import Brewing from "./Pages/Brewing.jsx";
import Equipment from "./Pages/CoffeeEquipment.jsx";

function App() {
  return (
   <div className="shell">
      <Header/>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/coffee-types" element={<CoffeeTypes/>}/>
            <Route path="/bean-types" element={<BeanTypes/>}/>
            <Route path="/benefits" element={<Benefits/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/brewing" element={<Brewing/>}/>
            <Route path="/equipment" element={<Equipment/>}/>
          </Routes>
        </div>
      </main>
      <Footer/>
   </div>
  )
}

export default App
