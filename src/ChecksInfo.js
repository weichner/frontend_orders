import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './ChecksInfo.css';




function ChecksInfo() {

    const [tableNumber, setTableNumber] = useState('');
    const [groupNumber, setGroupNumber] = useState('');
    const [checks, setChecks] = useState([]);

    const getTableChecks = async e => {
        e.preventDefault();
      
        
        const get_url = `https://backend-orders-app.herokuapp.com/check/?table_number=${tableNumber}&group_number=${groupNumber}`;
        
        const response = await axios.get(get_url).then(
            function (response) {
                setChecks(response.data.checks);
            }
        );
        
    }

  return (
    <div>
        <h2>Get checks by table and group 💵</h2>
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
            <div>
                {checks.length === 0 && tableNumber === '' && <p>Select table number a group...</p>}
                {checks.length === 0 && tableNumber !== '' && <p>Currently there is no check for this combination of table number and group.</p>}
                <ul>
                {
                    checks.map((check, index) => {
                        return (
                            <li key={index}>
                                <div><strong>Client Name:</strong> {check["client_name"]} <strong>Total:</strong> ${check["total"]} <strong>Tip:</strong> ${check["tip"]}</div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>

        <div>
            <button onClick={getTableChecks}>Get Table Checks</button>
        </div>
        <div className='links'>
            <Link to='/register-order' className='link'>Take Orders</Link>
        </div>
        
    </div>

  )
}

export default ChecksInfo;