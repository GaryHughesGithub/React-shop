import React from 'react'

export default function SearchBar(props) {

  const {inStock, setInStock, setFilterText} = props;

  const handleSetInStock = (evt) => {
    setInStock(evt.target.checked)
  }

  const changeFilterText = (evt) => {
    setFilterText(evt.target.value)
  }

  return (
    <form>
      <input 
      type="text" 
      placeholder="Search.." 
      onChange={changeFilterText}
      />
      <p>
        <input 
        type="checkbox" 
        checked={inStock}
        onChange={handleSetInStock}
        />
        {' '}
        Check to see items in stock
      </p>
    </form>
  )
}
