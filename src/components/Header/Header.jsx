import './Header.css'
import wooden from '../../assets/wooden.jpeg'
import chair from '../../assets/chair.jpeg'
import stand from '../../assets/stand.webp'
const Header = () => {
  return (
    <div className="header wrapper">
      <div className="header-img">
        <div>
          <img src={wooden} alt="wooder" />
          <h4>Wooden Desk</h4>
        </div>
        <div>
          <img src={chair} alt="wooder" />
          <h4>Chair</h4>
        </div>
        <div>
          <img src={stand} alt="wooder" />
          <h4>Laptop Stand</h4>
        </div>
      </div>
    </div>
  );
}

export default Header