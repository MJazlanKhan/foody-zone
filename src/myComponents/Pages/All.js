import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FoodList } from './List'


function All() {
  const [first, setFirst] = useState([])
  useEffect(() => {
    setFirst(FoodList)
  }, [])
  return (
    <div className='main'>
        {first.map((item) => {
                return (
                  <>
                  <div className='Cards' >
                  <div className='Card'>
                  <img className='itemimg' src={item.imageUrl} />
                  <div className='data'>
                  <h2 className='itemName'>{item.name}</h2>
                  <p className='description'>{item.description}</p>
                  <div className='priceBox'>
                  <p  className='price'>{ item.price}</p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </>
                 )
        })}
            </div>
  )
}

export default All