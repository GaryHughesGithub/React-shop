import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable(props) {

const {products, inStock, filterText} = props;

let rows = [];
let lastCategory = null;

products.forEach((product) => {

  if (product.name.indexOf(filterText) === -1) {
    return;
  }

  if(inStock && !product.stocked) {
    return;
  }

  if (product.category !== lastCategory) {
    rows.push(
      <ProductCategoryRow 
        category={product.category}
      />
    );
  }
  rows.push(
    <ProductRow 
      product={product}
    />
  )
  lastCategory = product.category
})


  return (
    <table>
      <th>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </th>
      <tbody>
        {rows}
      </tbody>
    </table>
    
    
  )
}
