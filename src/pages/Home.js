// dependencies
import React from 'react';
import { useState } from 'react';

// components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleEffect = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggleEffect={toggleEffect} />
            <Sidebar isOpen={isOpen} toggleEffect={toggleEffect} />
            <Main />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default Home
