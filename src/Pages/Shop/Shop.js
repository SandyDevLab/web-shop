import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setIems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');

    const items = await data.json();
    console.log(items);
    setIems(items);
  };


  return (
    <div>
     {items.map(item=>(
      <h1 key={item.id}>
      <Link to={`/shop/${item.id}`}>{item.title}</Link>
      </h1>
     ))}
    </div>
  );
}

export default Shop;
