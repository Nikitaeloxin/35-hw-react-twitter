import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav";
import Body from "./components/Body";

function App() {


    return (
        <div className='app'>

                <Nav/>
                <Body/>
        </div>
    );
}

export default App;