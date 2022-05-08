import DividerWithText from '../../components/divider/DividerWithText'
import EmailInput from '../../components/forms/EmailInput'
import PasswordInput from '../../components/forms/PasswordInput'

function SignUpForm() {

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return (
    <form className="form signup__form">
      <EmailInput label="Email" placeholder="Enter your email..." isRequired={true} />
      <PasswordInput label="Password" isRequired={true} />
      <button className='button primary-button' onClick={handleSignUp} type="submit">Sign Up</button>
      <DividerWithText text="OR" />
      <button className='button text-button' type="button">Sign In</button>
    </form>
  )
}

export default SignUpForm