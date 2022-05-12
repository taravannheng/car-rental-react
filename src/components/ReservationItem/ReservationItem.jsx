import { useContext, useState } from 'react'
import CartContext from '../../contexts/cartContext';

function ReservationItem({ productDetails }) {

  const [rentalDays, setRentalDays] = useState(1)
  const MAX_RENTAL_DAYS = 30

  const { cart, setCart } = useContext(CartContext)

  const handleDelete = (e) => {
    setCart(cart.filter((car, index) => car.id !== e.target.closest('.reservation-item').id))
  }

  const handleChange = (e) => {
    const messageEl = e.target.nextSibling.nextSibling

    setRentalDays(e.target.value)

    if (e.target.value && e.target.value > 0) {
      if (e.target.value > MAX_RENTAL_DAYS) {
        messageEl.innerText = "Max rental is 30 days"
      } else {
        messageEl.innerText = ""
      }
    } else {
      messageEl.innerText = "Invalid Inputs!"
      console.log("invalid");
    }
  }

  return (
    <ul className="reservation-item" id={productDetails.id}>
      <li className="reservation-item__vehicle">
        <div className="vehicle__img" style={{ backgroundImage: `url(${productDetails.imgUrl})`}}></div>
        <div className="vehicle__details">
          <span className="vehicle__name">{`${productDetails.brand} ${productDetails.model} ${productDetails.modelYear}`} | </span> <span className="vehicle__price-per-day">${productDetails.pricePerDay}</span>
        </div>
      </li>
      <li className="reservation-item__rental-days rental-days-control">
        <i className="rental-days-control__down-button fas fa-sort-down"></i>
        <input type="number" name="rental_days" className="rental-days-control__input" min="1" value={rentalDays} max="30" onChange={handleChange}/>    
        <i className="rental-days-control__up-button fas fa-sort-up"></i>
        <p className="rental-days-control__message"></p>
      </li>
      <li className="reservation-item__delete-button">
        <button type="button" onClick={handleDelete}>
          <span className="button__text">Delete</span>
        </button>
      </li>
    </ul>
  )
}

export default ReservationItem