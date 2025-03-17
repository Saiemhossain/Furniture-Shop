import { Link } from 'react-router-dom';
import furnitureItems from '../../data';
import './Furniture.css'

const Furniture = () => {
  return (
    <div id="furniture" className="wrapper furniture-area">
      <h4>New Arrivals</h4>
      <h2>Boost your productivity</h2>
      <div className="furniture-store">
        {furnitureItems.map(furniture => (
          <div key={furniture.id} className="furniture-shop">
            <img src={furniture.img} />
            <h3> {furniture.name} </h3>
            <h5> {furniture.des} </h5>
            <Link to={`/furniture/${furniture.id}`}>
              <button>View More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Furniture