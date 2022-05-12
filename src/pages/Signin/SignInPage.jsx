import LogInForm from "../../patterns/Forms1/LogInForm"

function LogInPage() {

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

export default LogInPage