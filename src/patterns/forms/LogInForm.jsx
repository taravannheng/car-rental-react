import { useState } from 'react'
import DividerWithText from "../../components/Divider/DividerWithText"

function LogInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogIn = (e) => {
    e.preventDefault()
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <form className="form login__form" onSubmit={handleLogIn}>
      <div className="form__control">
        <label className='form__label'>Email</label>
        <input type="email" placeholder="Enter your email..." onChange={handleEmailChange} value={email} className="form__input input__text" required/>
      </div>
      <div className="form__control">
        <label className='form__label'>Password</label>
        <input type="password" onChange={handlePasswordChange} value={password} className="form__input input__text" required/>
      </div>
      <button className='button primary-button' type="submit">Log In</button>
      <DividerWithText text="OR" />
      <button className='button text-button' type="button">Sign Up</button>
    </form>
  )
}

export default LogInForm