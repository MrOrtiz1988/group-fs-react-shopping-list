import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';


function App() {

    function fetchList(){

    }

    return (
        <div className="App">
            <Header />
            <form>
                <h2>Add an Item</h2>
               <div> 
                <p>Item: <input /></p>
                <p>Quantity: <input /> Unit: <input /></p>
               </div>
               <button>Save</button>
            </form>
            <div>
                <h2>Shopping List</h2>
                <button>Reset</button> <button>Clear</button>
            </div>
            
        </div>
    );
}

export default App;
