import React, {useState} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function FilterableProductTable(props) {

  const {products} = props;

  const [inStock, setInStock ] = useState(false);
  const handleSetInStock = (value) => {
    setInStock(value);
  }

  const [filterText, setFilterText ] = useState('');
  const changeFilterText = (value) => {
    setFilterText(value);
  }


  return (
    <div>
    <SearchBar 
    inStock={inStock}
    setInStock={handleSetInStock}
    filterText={filterText}
    setFilterText={changeFilterText}
    />
    <ProductTable 
    inStock={inStock}
    products={products}
    filterText={filterText}
    />
    </div>
  )
}
