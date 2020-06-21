import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export const Tshirt = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price };
    setCart(currentState => [...currentState, tshirt]);
  }
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
       
      <button className="snipcart-add-item"
                data-item-id={props.price}
                data-item-price={props.price}
                data-item-name={props.name}>
            Add to cart
            </button>
      <hr />
    </div>
  )
}