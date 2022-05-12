import { useContext } from 'react'
import CartContext from '../../contexts/cartContext';

function ReservationItem({ productDetails }) {

  const { cart, setCart } = useContext(CartContext)

  const handleDelete = (e) => {
    setCart(cart.filter((car, index) => car.id !== e.target.closest('.reservation-item').id))
  }

  return (
    <ul className="reservation-item" id={productDetails.id}>
      <li className="reservation-item__vehicle">
        <div className="vehicle__img" style={{ backgroundImage: `url(${productDetails.imgUrl})`}}></div>
        <div className="vehicle__details">
          <span className="vehicle__name">{`${productDetails.brand} ${productDetails.model} ${productDetails.modelYear}`}</span>
        </div>
      </li>
      <li className="reservation-item__price-per-day">${productDetails.pricePerDay}</li>
      <li className="reservation-item__delete-button">
        <button type="button" onClick={handleDelete}>
          <span className="button__text">Delete</span>
        </button>
      </li>
    </ul>
  )
}

export default ReservationItem