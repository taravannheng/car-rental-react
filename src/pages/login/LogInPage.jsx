import LogInBanner from '../../assets/images/landing-page.jpg'
import LogoLight from '../../assets/images/logo-light.png'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import TextButton from '../../components/buttons/TextButton'
import DividerWithText from '../../components/divider/DividerWithText'
import TextInput from '../../components/forms/TextInput'
import PasswordInput from '../../components/forms/PasswordInput'

function LoginPage() {
  return (
    <div className='login'>
      <div className="login__banner">
        <img src={LogInBanner} alt='car for rent' />
      </div>
      <div className="login__section">
        <img src={LogoLight} alt="Logo" />
        <form className="login-form">
          <TextInput label="Email" placeholder="Enter your email..." isRequired={true} />
          <PasswordInput label="Password" isRequired={true} />
          <PrimaryButton>LOGIN</PrimaryButton>
          <DividerWithText text="OR" />
          <TextButton>SIGNUP</TextButton>
        </form>
      </div>
    </div>
  )
}

export default LoginPage