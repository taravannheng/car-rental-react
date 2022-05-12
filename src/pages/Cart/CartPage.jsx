import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import Header from "../../patterns/Header/Header"
import CartContext from '../../contexts/cartContext'
import { useContext } from 'react'

function CartPage() {
  const { cart } = useContext(CartContext)

  return (
    <>
      <Header />
      <main className="cart">
        <h1 className="cart__title">
              <span className="title__text">RESERVATIONS</span>
        </h1>
        <ul className="cart__labels">
            <li><span>Vehicle</span></li>
            <li><span>Rental Days</span></li>
            <li><span>Action</span></li>
        </ul>
        <div className="cart__reservation-list">
          <ul className="reservation-item">
            <li className="reservation-item__vehicle">
              <div className="vehicle__img" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/car-rental-8cd87.appspot.com/o/320i.jpg?alt=media&token=b65efe01-d72c-4416-a6d4-96396fa85e29)`}}></div>
              <div className="vehicle__details">
                <span className="vehicle__name">Nissan X-trail 2015 | </span> <span className="vehicle__price-per-day">$360</span>
              </div>
            </li>
            <li className="reservation-item__rental-days rental-days-control">
              <i className="rental-days-control__down-button fas fa-sort-down"></i>
              <input type="number" name="rental_days" className="rental-days-control__input" min="1" value="1" max="30" />    
              <i className="rental-days-control__up-button fas fa-sort-up"></i>
              <p className="rental-days-control__message"></p>
            </li>
            <li className="reservation-item__delete-button">
              <button type="button">
                <span className="button__text">Delete</span>
              </button>
            </li>
          </ul>

          <ul className="reservation-item">
            <li className="reservation-item__vehicle">
              <div className="vehicle__img" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/car-rental-8cd87.appspot.com/o/320i.jpg?alt=media&token=b65efe01-d72c-4416-a6d4-96396fa85e29)`}}></div>
              <div className="vehicle__details">
                <span className="vehicle__name">Nissan X-trail 2015 | </span> <span className="vehicle__price-per-day">$360</span>
              </div>
            </li>
            <li className="reservation-item__rental-days rental-days-control">
              <i className="rental-days-control__down-button fas fa-sort-down"></i>
              <input type="number" name="rental_days" className="rental-days-control__input" min="1" value="1" max="30" />    
              <i className="rental-days-control__up-button fas fa-sort-up"></i>
              <p className="rental-days-control__message"></p>
            </li>
            <li className="reservation-item__delete-button">
              <button type="button">
                <span className="button__text">Delete</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="cart__checkout">
          <div><Link to={ROUTES.CHECKOUT} className='cart__checkout-button'>Checkout</Link></div>
        </div>
      </main>
    </>
  )
}

export default CartPage