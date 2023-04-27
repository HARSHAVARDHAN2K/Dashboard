import axios from 'axios';
import {useState} from 'react';
import data from './product.json'

function Api() {
 

  return (
    <div className="Api">
        {console.log(data[0].product_name)}
    </div>
  );
}

export default Api;
