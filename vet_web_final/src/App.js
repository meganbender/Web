import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import AskVet from './components/AskVet';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Shop from './components/shop/Shop';
import './styles/fishcreek.css';

function App(){
    return (
        <Router>
            <div id='wrapper'>
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/askvet" element={<AskVet />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;