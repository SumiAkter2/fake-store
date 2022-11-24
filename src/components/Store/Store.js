import React, { useState } from 'react';
import './Store.css';

const Store = (props) => {
    const [count, setCount] =useState(0);
    const addMenu=()=> setCount (count+1);
  
        const cutMenu=()=>setCount(count-1);
    
    const {category,image, price, title,id}=props.store;
  
    return (
        <div  className='store'>
           
            <h4>Id:{id}</h4>
            <h4>Category:{category}</h4>
            <img src={image} alt="" />
            <h3>Price:{price}</h3>
            <h5>Name:{title}</h5>
            <h6>Add num:{count}</h6>
            <h4>Total Price:</h4>
            <button onClick={addMenu}>ADD CART</button>
            <button onClick={cutMenu}>CUT CART</button>
        
        </div>
    );
};
//  function Counter(){

//  }
export default Store;