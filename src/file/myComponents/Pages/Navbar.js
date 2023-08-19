import React, { useEffect } from 'react'
import '../Pages/Pages.css'
import { FoodList } from './List'
import { useState } from 'react'
function Navbar() {
    const [first, setFirst] = useState([])
    useEffect(() => {
      setFirst(FoodList)
    }, [])

    return (

        <>

            <div className='nav'>
                <nav>
                    <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
                    <input placeholder='Search Item....' />
                </nav>
                <div className='btns'>
                    <button>All</button>
                    <button>BreakFast</button>
                    <button>Lunch</button>
                    <button>Dinner</button>
                </div>
            </div>
            <div className='main'>
            {first.map((item) => {
          return (
            <>
            <div className='Cards' >
            <div className='Card'>
            <img src={item.imageUrl} />
            <div className='data'>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p  className='price'>{item.price}</p>
            </div>
            </div>
            </div>
            </>
           )
        })}
            </div>
        </>
    )
}

export default Navbar