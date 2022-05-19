import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import DividerWithText from "../../components/Divider/DividerWithText"
import Button from "../../components/Buttons/Button"


function ForgotPasswordForm() {

  const [email, setEmail] = useState("")

  const auth = getAuth()

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(() => (e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      sendPasswordResetEmail(auth, email)
      alert("Reset link has been sent to your email!")
      navigate('/signin')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form forgotpassword__form" onSubmit={handleSubmit}>
      <div className="form__control">
        <label className='form__label'>Email</label>
        <input type="email" placeholder="Enter your email..." onChange={handleEmailChange} value={email} className="form__input input__text" required/>
      </div>
      <Button type='submit' className='button--primary button--block button--selected'>Reset Password</Button>
      <DividerWithText text="OR" />
      <Button className='button--text button--block'><Link className='link' to={ROUTES.SIGNIN}>Sign In</Link></Button>
    </form>
  )
}

export default ForgotPasswordForm