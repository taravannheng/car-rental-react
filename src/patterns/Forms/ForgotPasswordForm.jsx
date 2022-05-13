import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import DividerWithText from '../../components/Divider1/DividerWithText'


function ForgotPasswordForm() {

  const [email, setEmail] = useState("")

  const auth = getAuth()

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
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
      <button className='button primary-button' type="submit">Reset Password</button>
      <DividerWithText text="OR" />
      <Link to="/signin" className='button text-button'>Sign In</Link>
    </form>
  )
}

export default ForgotPasswordForm