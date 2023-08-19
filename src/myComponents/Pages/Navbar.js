import '../Pages/Pages.css'
import Main from './Main'
import All from '../Pages/All';
import Dinner from '../Pages/Dinner';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



function Navbar() {

    return (
        <>

            <div className='nav'>
                <nav>
                    <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
                    <input placeholder='Search Item....' />
                </nav>
                <div className='btns'>
                    <Link to='/all'><button id='all' className='all' >All</button></Link>
                    <Link to='/breakfast'><button id='breakfast' className='breakfast'>BreakFast</button></Link>
                    <Link to='/lunch'><button id='lunch' className='lunch'>Lunch</button></Link>
                    <Link to='/dinner'><button id='dinner' className='dinner' >Dinner</button></Link>
                </div>
            </div>
            </>
    )
}

export default Navbar