import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';


function Menu() {
    const [menu, setMenu] = useState({
        'pizza': 10.50,
        'burger': 5.00,
        'salad': 6.20,
        'coke': 2.00,
        'beer': 1.50
            });
  return (
    <div>
        <h2>Menu 📑</h2>
        <h6>by Werner Eichner</h6>
        <div>
            <ul>
            {
                Object.keys(menu).map((product, index) => {
                    return (
                    <li key={index}>
                        <div><strong>{product}</strong>: ${menu[product]}</div>
                    </li>
                    )
                })

            }
            </ul>
        </div>
        <div className='links'>
            <Link to='/register-order' className='link'>Take Orders</Link>
        </div>
        
    </div>
  )

}


export default Menu;