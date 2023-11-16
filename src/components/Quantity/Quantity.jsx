import React, { useState } from 'react';
import './Quantity.scss'

const Quantity = () => {
    // Initialize the counter state with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

    return (
        <div className='quantity-counter-wrapper'>
            <ul className='list-unstyled quantity-counter'>
                <li><button className="qty-btn-minus" onClick={decrement} type="button">-</button></li>
                <li><input type="text" name="qty" defaultValue={0} value={count} className="input-qty" /></li>
                <li><button className="qty-btn-plus" onClick={increment} type="button">+</button></li>
            </ul>
        </div>

        




    )
}

export default Quantity
