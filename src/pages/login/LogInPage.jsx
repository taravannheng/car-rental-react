import PrimaryButton from '../../components/buttons/PrimaryButton'
import TextButton from '../../components/buttons/TextButton'
import DividerWithText from '../../components/divider/DividerWithText'
import TextInput from '../../components/forms/TextInput'
import PasswordInput from '../../components/forms/PasswordInput'

function LoginPage() {
  return (
    <div className='login'>
      <div className="login__overlay"></div>
      <div className="login__container">
        <div className="login__logo">
        </div>
        <form className="form login__form">
          <TextInput label="Email" placeholder="Enter your email..." isRequired={true} />
          <PasswordInput label="Password" isRequired={true} />
          <PrimaryButton>Log In</PrimaryButton>
          <DividerWithText text="OR" />
          <TextButton>Sign Up</TextButton>
        </form>
      </div>
    </div>
  )
}

export default LoginPage