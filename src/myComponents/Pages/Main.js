import React from 'react'
import { FoodList } from './List'
import { useState } from 'react'
import { useEffect } from 'react'

function Main() {
    const [first, setFirst] = useState([])
    useEffect(() => {
      setFirst(FoodList)
    }, [])
    let startval = 0
    let maxval = 9
  return (
    
    <div className='main'>
            {first.map((item) => {
              if (startval < maxval) {
                startval++
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
              }
        })}
            </div>
  )
}

export default Main