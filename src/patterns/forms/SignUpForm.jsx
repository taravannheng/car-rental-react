import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import FirebaseContext from "../../components/Firebase/firebaseContext"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import DividerWithText from '../../components/Divider/DividerWithText'


function SignUpForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const firebaseApp = useContext(FirebaseContext)
  const auth = getAuth(firebaseApp)

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  } 

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password) 

      // const user = userCredential.user
      
      createUserWithEmailAndPassword(auth, email, password) 
      navigate("/signin")

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form signup__form" onSubmit={handleSignUp}>
      <div className="form__control">
        <label className='form__label'>Email</label>
        <input type="email" placeholder="Enter your email..." onChange={handleEmailChange} value={email} className="form__input input__text" required/>
      </div>
      <div className="form__control">
        <label className='form__label'>Password</label>
        <input type="password" onChange={handlePasswordChange} value={password} className="form__input input__text" required/>
      </div>
      <button className='button primary-button' type="submit">Sign Up</button>
      <DividerWithText text="OR" />
      <Link to="/signin" className='button text-button'>Sign In</Link>
    </form>
  )
}

export default SignUpForm