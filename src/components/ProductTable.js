import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from './ProductRow ';

function ProductTable (props) {
  
  return(
      <div>
        <table>
            <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {props.products.map( data => {
            return (
            <ProductRow key={data.id} name={data.name} price={data.price}/>
        )
      })}
      </tbody>
        </table>
        <ProductRow/>
      </div>    
  )
}

export default ProductTable