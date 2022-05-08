import LogInForm from "../../patterns/Forms/LogInForm"

function LoginPage() {
  return (
    <div className='login'>
      <div className="login__overlay"></div>
      <div className="login__container">
        <div className="login__logo">
        </div>
        <LogInForm />
      </div>
    </div>
  )
}

export default LoginPage