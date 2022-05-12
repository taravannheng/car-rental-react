import { Link, Navigate } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import Header from "../../patterns/Header/Header"
import CartContext from '../../contexts/cartContext'
import { useContext } from 'react'
import ReservationItem from '../../components/ReservationItem/ReservationItem'
import CheckoutContext from '../../contexts/checkoutContext'

function CartPage() {
  const { cart } = useContext(CartContext)
  const { isValidToCheckout } = useContext(CheckoutContext)

  if (cart.length === 0) {
    return <Navigate to={ROUTES.HOME} />
  }

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
        { cart.map(car => <ReservationItem productDetails={car} key={car.id}/>) }
        </div>
        <div className="cart__checkout">
          <div><Link to={ROUTES.CHECKOUT} className={`cart__checkout-button ${!isValidToCheckout && 'cart__checkout-button--disabled'}`} style={{ pointerEvents: isValidToCheckout ? '' : 'none' }}>Checkout</Link></div>
        </div>
      </main>
    </>
  )
}

export default CartPage