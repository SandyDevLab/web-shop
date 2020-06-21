import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Item({match}) {

  useEffect(() => {
    fetchItems();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItems = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${
        match.params.id}`
    );

    const item = await data.json();
    console.log(item);
    setItem(item);
  };


  return (
    <div>

  <h1>{item.title}</h1>

    </div>
  );
}

export default Item;
