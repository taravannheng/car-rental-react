import { useState, useContext } from 'react'
import { useNavigate, Link } from "react-router-dom"
import DividerWithText from '../../components/Divider/DividerWithText';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as ROUTES from '../../constants/routes'
import UserAuthContext from '../../contexts/userAuthContext';
import Button from '../../components/Buttons/Button';

const LogInForm = () => {
  const navigate = useNavigate()

  const auth = getAuth()

  const { setLoggedIn } = useContext(UserAuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogIn = async (e) => {
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (userCredential.user) {

        setLoggedIn(() => (true))

        navigate(ROUTES.HOME)
      }
    } catch (error) {
      alert("Wrong Credentials")
    }
  }

  const handleEmailChange = (e) => {
    setEmail(() => (e.target.value))
  }

  const handlePasswordChange = (e) => {
    setPassword(() => (e.target.value))
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
      <Button type='submit' className='button--primary button--block button--selected'>Sign In</Button>
      <Button className='button--text button--block'><Link className='link' to="/forgot-password">Reset Password</Link></Button>
      <DividerWithText text="OR" />
      <Button className='button--text button--block'><Link className='link' to={ROUTES.SIGNUP}>Sign Up</Link></Button>
    </form>
  )
}

export default LogInForm