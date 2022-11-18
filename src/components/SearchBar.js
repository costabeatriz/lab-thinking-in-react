import { useState } from 'react';
import jsonData from '../data.json';

function SearchBar () {
  const [checked, setChecked] = useState(false);

  return(
      <div>
        <h3>Search</h3>
        <input type="text"/>
        <input type="checkbox" id="checkbox" name="checkbox" value="products"/>
        <label for="products"> Only show products in stock</label>

      </div>    
  )
}

export default SearchBar