import React from 'react';
import { useState, useEffect } from 'react';
import { FoodList } from './List';
import Navbar from './Navbar';

function Lunch() {
  const [first, setFirst] = useState([]);

  useEffect(() => {
    setFirst(FoodList);
  }, []);

  return (
    <div>
      <div className='main'>
        {first
          .filter(item => item.type === 'lunch') 
          .map(item => (
            <div key={item.id} className='Cards'>
              <div className='Card'>
                <img className='itemimg' src={item.imageUrl} alt={item.name} />
                <div className='data'>
                  <h2 className='itemName'>{item.name}</h2>
                  <p className='description'>{item.description}</p>
                  <div className='priceBox'>
                    <p className='price'>{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Lunch;
