import ForgotPasswordForm from "../../patterns/Forms/ForgotPasswordForm"

const ForgotPasswordPage = () => {

  return (
    <div className='forgotpassword'>
      <div className="forgotpassword__overlay"></div>
      <div className="forgotpassword__container">
        <div className="forgotpassword__logo">
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export default ForgotPasswordPage