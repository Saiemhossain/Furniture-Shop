/* eslint-disable no-unused-vars */


import { useNavigate, useParams } from "react-router";
import { cartState } from "../../Context/Context"
import furnitureItems from "../../data";


const SingleFurniture = () => {

  const { cart, setCart } = cartState();
  const navigate = useNavigate()

  const addToCart = () => {
    setCart([...cart, furniture])
    navigate('/checkout')
  }

  const { id } = useParams();


  const furniture = furnitureItems.find((item)=> item.id === parseInt(id))

  return (
    <div className='single-furniture'>
      <img src={furniture.img} />
      <h3> {furniture.name} </h3>
      <h5>{furniture.des} </h5>
      <p> ${furniture.price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default SingleFurniture