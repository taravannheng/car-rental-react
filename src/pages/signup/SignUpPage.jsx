import SignUpForm from "../../patterns/forms/SignUpForm"

function SignUpPage() {
  return (
    <div className='signup'>
      <div className="signup__overlay"></div>
      <div className="signup__container">
        <div className="signup__logo">
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUpPage