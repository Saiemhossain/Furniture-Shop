import thankYou from '../assets/thank.webp'
import './ThankYou.css'
const ThankYou = () => {
  return (
    <div className='thanks wrapper'>
      <img className='thankyou' src= {thankYou} alt="thank you" />
    </div>
  )
}

export default ThankYou
