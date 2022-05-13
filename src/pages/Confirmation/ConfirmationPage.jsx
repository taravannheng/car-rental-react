import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

function ConfirmationPage() {
  return (
    <main className="confirmation">
      <div className="confirmation__overlay"></div>
      <div className="confirmation__dialog">
        <h1 className="confirmation__dialog-title">Thank You!</h1>
        <p className="confirmation__dialog-description">We will contact you through email for further processes.</p>
        <Link to={ROUTES.HOME} className="confirmation__dialog-back-button">Back to Home</Link>
      </div>
    </main>
  )
}

export default ConfirmationPage