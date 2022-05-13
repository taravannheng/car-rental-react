import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

function NotFoundPage() {
  return (
    <main className="notfound">
      <div className="notfound__overlay"></div>
      <div className="notfound__dialog">
        <h1 className="notfound__dialog-title">404!</h1>
        <p className="notfound__dialog-description">Sorry, we cannot find the page you are looking for!</p>
        <Link to={ROUTES.HOME} className="notfound__dialog-back-button">Back to Home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage