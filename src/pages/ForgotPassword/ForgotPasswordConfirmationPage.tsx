import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import Button from '../../components/Buttons/Button'

const ForgotPasswordConfirmation = () => {
  return (
    <>
      <main className="forgot-password-confirmation">
      <div className="forgot-password-confirmation__overlay"></div>
      <div className="forgot-password-confirmation__dialog">
        <h1 className="forgot-password-confirmation__dialog-title">Thank You!</h1>
        <p className="forgot-password-confirmation__dialog-description">An email has been sent to you, please follow the link in the email to reset your password.</p>
        <Button type='button' className='button--primary button--selected'><Link to={ROUTES.HOME} className='link'>Back to Home</Link></Button>
      </div>
    </main>
    </>
  )
}

export default ForgotPasswordConfirmation