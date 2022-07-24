import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import * as ROUTES from '../../constants/routes'
import Button from '../../components/Buttons/Button'

import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store/auth'

const Header = () => {
  const cart = useSelector<any, any>(state => state.cart.cart);
  
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const auth = getAuth();

  const signOutHandler = () => {
    
    dispatch(authActions.logout());

    signOut(auth).then(() => {
      navigate(ROUTES.SIGNIN)
    }).catch((error) => {
      alert('An error has occured!')
    });
  }

  return (
    <header className="header">
        <Link to={ROUTES.HOME}><div className="header__logo" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/car-rental-8cd87.appspot.com/o/logo-dark.png?alt=media&token=2a679b3e-2b30-4c4d-b59d-ee95f3515459)` }}></div></Link>    

        <h1 className="header__title">
            <span className="">Car Rental Center</span>
        </h1>

        <div className='header__button-container'>
          <Button type="button" className='button--primary button--selected'>
            <Link to={cart.length !== 0 && ROUTES.CART} className='header__cart link'>
              <span>Cart</span>
              <div className="counter">
                <span className="counter__text">{cart.length}</span>
              </div>
            </Link>
          </Button>          
          <div className='icon-container' onClick={signOutHandler}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon icon__sign-out"/>
          </div>
        </div>
    </header>
  )
}

export default Header