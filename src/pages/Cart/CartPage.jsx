import { Link, Navigate } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import CartContext from '../../contexts/cartContext'
import { useContext } from 'react'
import Header from "../../patterns/Header/Header"
import ReservationItem from '../../components/ReservationItem/ReservationItem'
import Button from '../../components/Buttons/Button'

function CartPage() {
  const { cart } = useContext(CartContext)

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
            <li><span>Price Per Day</span></li>
            <li><span>Action</span></li>
        </ul>
        <div className="cart__reservation-list">
        { cart.map(car => <ReservationItem productDetails={car} key={car.id}/>) }
        </div>
        <div className="cart__checkout">
          <div><Button type='button' className='button-primary button--selected'><Link to={ROUTES.CHECKOUT} className={'cart__checkout-button link'}>Checkout</Link></Button></div>
        </div>
      </main>
    </>
  )
}

export default CartPage