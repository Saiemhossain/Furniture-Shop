/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import { cartState } from '../Context/Context';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const CheckOut = () => {

  const navigate = useNavigate()
  const { cart,setCart } = cartState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((pre, curr) => pre + Number(curr.price), 0));
  }, [cart]); 

  function handlePlaceOrder() {
    toast.success('Order Successfully recieved')
    setCart([])
    navigate('/thankyou');
  }

  function removeItems(id) {
    setCart(cart.filter((item)=> item.id !==id))
  }

  return (
    <>
      <div className="checkout-page">
        {cart.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <h5>${Number(item.price)}</h5>
            <button className="removeOrder" onClick={()=>removeItems(item.id)}>
              Remove Order
            </button>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        <h3>Total : ${total.toFixed(2)}</h3>
        <button className="handlePlace" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </>
  );
};

export default CheckOut;
