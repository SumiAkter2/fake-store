import React, { useEffect, useState } from 'react';
import Store from '../Store/Store';
import './Stores.css';


const Stores = () => {
    const [stores, setStores] = useState ([]);
    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setStores(data))
    },[])
    return (
        <div >
            <h1>Fake Store Shop</h1>
            <h3>Shopping Your Favorite That You Need !!!</h3>
           <div data-aos="fade-right" className='stores'>
            {
                stores.map(store=> <Store store={store}></Store>)
            }
           
            </div> 
          </div>
    );
};

export default Stores;