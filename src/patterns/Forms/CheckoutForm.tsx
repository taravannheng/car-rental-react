import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import Button from '../../components/Buttons/Button'
import CheckoutInputs from '../../models/CheckoutInputs'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

const checkEmpty = (val: string) => {
  return val === "" ? true : false
}

const checkEmailValidity = (val: string) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val);
}

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isValidForm, setIsValidForm] = useState(false)
  const [userInputs, setUserInputs] = useState<CheckoutInputs[]>([
    {
      name: "firstName",
      value: "",
      isValid: false
    }, 
    {
      name: "lastName",
      value: "",
      isValid: false
    },
    {
      name: "email",
      value: "",
      isValid: false
    }
  ])

  const checkFormValidity = () => {
    let isValid = true

    userInputs.map(userInput => {
      if (userInput.isValid === false) {
        isValid = false
      }

      return null
    })

    setIsValidForm(() => (isValid))
  }

  const handleFirstName = (e) => {
    const firstName = e.target.value
    const messageEl = e.target.nextSibling
    
    //check if valid
    const isEmpty = checkEmpty(firstName)


    //display or hide error message
    if (isEmpty) {
      messageEl.innerText = "First Name is required!"
      messageEl.classList.add("input-control__message--show")
    } else {
      messageEl.innerText = ""
      messageEl.classList.remove("input-control__message--show")
    }

    // update state
    setUserInputs(() => (userInputs.map(userInput => {

      if (userInput.name === e.target.name) {
        return {...userInput,
          value: firstName,
          isValid: !isEmpty 
        }
      }

      return userInput
    })))

    //check form validity
    checkFormValidity()

  }

  const handleLastName = (e) => {
    const lastName = e.target.value
    const messageEl = e.target.nextSibling

    //check if valid
    const isEmpty = checkEmpty(lastName)

    //display or hide error message
    if (isEmpty) {
      messageEl.innerText = "Last Name is required!"
      messageEl.classList.add("input-control__message--show")
    } else {
      messageEl.innerText = ""
      messageEl.classList.remove("input-control__message--show")
    }

    // update state
    setUserInputs(() => (userInputs.map(userInput => {

      if (userInput.name === e.target.name) {
        return {...userInput,
          value: lastName,
          isValid: !isEmpty 
        }
      }

      return userInput
    })))

    //check form validity
    checkFormValidity()
  }

  const handleEmail = (e) => {
    const email = e.target.value
    const messageEl = e.target.nextSibling

    //check if valid
    const isValid = checkEmailValidity(email)


    //display or hide error message
    if (!isValid) {
      messageEl.innerText = "Invalid Email!"
      messageEl.classList.add("input-control__message--show")
    } else {
      messageEl.innerText = ""
      messageEl.classList.remove("input-control__message--show")
    }

    // update state
    setUserInputs(() => (userInputs.map(userInput => {

      if (userInput.name === e.target.name) {
        return {...userInput,
          value: email,
          isValid: isValid 
        }
      }

      return userInput
    })))

    //check form validity
    checkFormValidity()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // setCart(() => ([]))
    dispatch(cartActions.clear());

    navigate(ROUTES.CONFIRMATION)
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h1 className="checkout-form__title">Checkout</h1>
      <div className="checkout-form__first-name input-control">
        <label htmlFor="first-name" className="input-control__label">First Name:</label>
        <input type="text" name="firstName" id="first-name" className="input-control__input" required onChange={handleFirstName}/>
        <small className="input-control__message"></small>
      </div>
      <div className="checkout-form__last-name input-control">
        <label htmlFor="last-name" className="input-control__label">Last Name:</label>
        <input type="text" name="lastName" id="last-name" className="input-control__input" required onChange={handleLastName}/>
        <small className="input-control__message"></small>
      </div>
      <div className="checkout-form__email input-control">
        <label htmlFor="email" className="input-control__label">Email:</label>
        <input type="email" name="email" id="email" className="input-control__input" required onChange={handleEmail}/>
        <small className="input-control__message"></small>
      </div>
      {/* <Button type='submit' className={`button--primary button--selected button--block ${!isValidForm && 'button--disabled'}`} disabled={!isValidForm && 'disabled'}>Book</Button> */}
      <Button type='submit' className={`button--primary button--selected button--block ${!isValidForm && 'button--disabled'}`}>Book</Button>
    </form>
  )
}

export default CheckoutForm