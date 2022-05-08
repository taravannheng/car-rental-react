import DividerWithText from '../../components/Divider/DividerWithText'
import EmailInput from '../../components/Forms/EmailInput'
import PasswordInput from '../../components/Forms/PasswordInput'

function LogInForm() {

  const handleLogIn = (e) => {
    e.preventDefault();
  }

  return (
    <form className="form login__form">
      <EmailInput label="Email" placeholder="Enter your email..." isRequired={true} />
      <PasswordInput label="Password" isRequired={true} />
      <button className='button primary-button' onClick={handleLogIn} type="submit">Log In</button>
      <DividerWithText text="OR" />
      <button className='button text-button' type="button">Sign Up</button>
    </form>
  )
}

export default LogInForm