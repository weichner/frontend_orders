import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './OrderInfo.css';
import {Link} from 'react-router-dom';

function OrderInfo() {

  const [tableNumber, setTableNumber] = useState('');
  const [groupNumber, setGroupNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [productsName, setProductsName] = useState('');
  const [amounts, setAmounts] = useState('');

  const [productsWithAmounts, setProductsWithAmounts] = useState({});


  const postToBackend = e => {
    e.preventDefault();

    const productsNameList = productsName.replace(' ', )

    const post_url = 'https://backend-orders-app.herokuapp.com/order/';
    const payload = {
        table_number: tableNumber,
        group_number: parseInt(groupNumber),
        client_name: clientName,
        products: productsWithAmounts
    }
    console.log(payload)
    const response = axios.post(post_url, payload)
    // end clean inputs
    setTableNumber('');
    setGroupNumber('');
    setClientName('');
    setProductsName('');
    setAmounts('');
    setProductsWithAmounts({});
    document.getElementById("showProducts").innerHTML = '';
  }

  const addProduct = e => {
    e.preventDefault();

    setProductsWithAmounts({...productsWithAmounts, [`${productsName}`]: parseInt(amounts)});
    var divProduct = document.createElement("div");
    divProduct.innerText = `${productsName}: ${amounts}`;
    document.getElementById("showProducts").appendChild(divProduct);

    setProductsName('');
    setAmounts('');
  }


  return (
    <div className='order_info'>
        <h2>Take your order 🧺</h2>
        <h6>by Werner Eichner</h6>
        <div>
            <h5>Table Number:</h5>
            <input type="number" min="1" max="5" value={tableNumber} onChange=
            {e => setTableNumber(e.target.value)}/>
        </div>
        <div>
            <h5>Group Number:</h5>
            <input type="number" min="1" max="500" value={groupNumber} onChange=
            {e => setGroupNumber(e.target.value)}/>
        </div>
        <div>
            <h5>Client Name:</h5>
            <input type="text" value={clientName} onChange=
            {e => setClientName(e.target.value)}/>
        </div>
        <div className='info_products'>
            <h5>Products:</h5>
            <div className='products_list_item'>
                <input className='product_item_name' type="text" value={productsName} onChange=
                {e => setProductsName(e.target.value)}/>
                <input className='amount' type="number"value={amounts}  onChange=
                {e => setAmounts(e.target.value)}/>
                <button onClick={addProduct}>Add Product</button>
            </div>
            <div id='showProducts'></div>
            
        </div>
        <div>
            <button onClick={postToBackend}>Add Order</button>
        </div>
        <div className='links'>
            <Link to='/get-checks' className='link'>Get Checks</Link>
            <Link to='/menu' className='link'>Menu</Link>
        </div>

    </div>
  )
}

export default OrderInfo;