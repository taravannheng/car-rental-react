import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../contexts/cartContext'
import * as ROUTES from '../../constants/routes'
import Button from '../../components/Buttons/Button'

function Header() {
  const { cart } = useContext(CartContext)

  return (
    <header className="header">
        <Link to={ROUTES.HOME}><div className="header__logo" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/car-rental-8cd87.appspot.com/o/logo-dark.png?alt=media&token=2a679b3e-2b30-4c4d-b59d-ee95f3515459)` }}></div></Link>    

        <h1 className="header__title">
            <span className="">Car Rental Center</span>
        </h1>

        <Button type="button" className='button--primary button--selected'>
          <Link to={cart.length !== 0 && ROUTES.CART} className='header__cart link'>
            <span>Cart</span>
            <div className="counter">
              <span className="counter__text">{cart.length}</span>
            </div>
          </Link>
        </Button>
    </header>
  )
}

export default Header