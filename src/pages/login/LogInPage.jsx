import PrimaryButton from '../../components/buttons/PrimaryButton'
import TextButton from '../../components/buttons/TextButton'
import DividerWithText from '../../components/divider/DividerWithText'
import TextInput from '../../components/forms/TextInput'
import PasswordInput from '../../components/forms/PasswordInput'

function LoginPage() {
  return (
    <div className='login'>
      <div className="login__logo">
      </div>
      <form className="form login__form">
        <TextInput label="Email" placeholder="Enter your email..." isRequired={true} />
        <PasswordInput label="Password" isRequired={true} />
        <PrimaryButton>LOGIN</PrimaryButton>
        <DividerWithText text="OR" />
        <TextButton>SIGNUP</TextButton>
      </form>
    </div>
  )
}

export default LoginPage