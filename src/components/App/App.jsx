import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';

//import from refractoring
import ItemForm from '../ItemForm/ItemForm.jsx';



function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    
    useEffect(() => {
        fetchList()
      }, [])

    

function fetchList(){
    axios({
        method: 'GET',
        url: '/shoppingList'
    }).then((response) => {
        console.log(response.data);
        setShoppingList(response.data)
    }).catch((error) => {
        console.log('WhoOpsies!', error);
    })
}

function saveList (event){
    event.preventDefault;
    axios({
        method: 'POST',
        url: '/shoppingList',
        data: {
            item: item,
            quantity: quantity,
            unit: unit
        }
    }).then((response) => { 
        setItem('');
        setQuantity('');
        setUnit('');
        fetchList();
        console.log(response);
    }).catch((error) => {
        console.log('WhoOpsies!', error);
    })
}

function updatePurchased(listId){
    axios({
        method: 'PUT',
        url: `/shoppingList/${listId}`,
        data: {
          is_purchased: true
        }
        }).then(function(response) {
            fetchList()
        }).catch(function(error) {
            console.log('uh no, you have no Money:', error);
        })
    }

function checkPurchased(thingToCheck, id){
    if (!thingToCheck){
        return (
            <>
            <button onClick={() => {updatePurchased(id)}}>Buy</button> 
            <button>Remove</button>
            </>
        )
    }else{
        return (
            <>
            <h4>Purchased</h4>
            </>
        )
    }
}



    return (
    <div className="App">
        <Header />
        <ItemForm 
            saveList={saveList}
            setItem={setItem}
            setQuantity={setQuantity}
            setUnit={setUnit}
        />
        <div>
            <h2>Shopping List</h2>
            <button>Reset</button> <button>Clear</button>
            <div>
                { 
                shoppingList.map((list) => {
                    return (
                    <div className='box' key={list.id}>
                    <h3>{list.name}</h3>
                    <p>{list.quantity} {list.unit}</p>
                    {checkPurchased(list.is_purchased, list.id)}
                    {/* updatePurchased(list.id) = will run automatically 
                    onClick function - good but depends
                    onclick fucntion () - bad
                    onClick function (fjnfjnv) - bad 
                    onClick function (function (ghghgh) - good
                    */}

                    </div>
                )})
                }
            </div>
        </div>
    </div>

    )
        
}



export default App;
