import { Link, Navigate } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import Header from "../../patterns/Header/Header"
import ReservationItem from '../../components/ReservationItem/ReservationItem'
import Button from '../../components/Buttons/Button'

import { useSelector } from 'react-redux'

const CartPage = () => {
  const cart = useSelector<any, any>(state => state.cart.cart);

  if (cart.length === 0) {
    return <Navigate to={ROUTES.HOME} />
  }

  return (
    <>
      <Header />
      <main className="cart">
       <Button className='button--text button--block cart__back-to-home-button'><Link className='link' to={ROUTES.HOME}>Back to Home</Link></Button>
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