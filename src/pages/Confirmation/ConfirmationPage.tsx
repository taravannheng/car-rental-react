import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import Button from '../../components/Buttons/Button'

const ConfirmationPage = () => {
  return (
    <main className="confirmation">
      <div className="confirmation__overlay"></div>
      <div className="confirmation__dialog">
        <h1 className="confirmation__dialog-title">Thank You!</h1>
        <p className="confirmation__dialog-description">We will contact you through email for further processes.</p>
        <Button type='button' className='button--primary button--selected'><Link to={ROUTES.HOME} className='link'>Back to Home</Link></Button>
      </div>
    </main>
  )
}

export default ConfirmationPage