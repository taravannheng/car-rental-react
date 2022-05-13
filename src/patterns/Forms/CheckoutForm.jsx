function CheckoutForm() {
  return (
    <form className="checkout-form">
      <h1 className="checkout-form__title">Checkout</h1>
      <div className="checkout-form__first-name input-control">
        <label htmlFor="first-name" className="input-control__label">First Name:</label>
        <input type="text" name="firstName" id="first-name" className="input-control__input" required />
        <small className="input-control__message"></small>
      </div>
      <div className="checkout-form__last-name input-control">
        <label htmlFor="last-name" className="input-control__label">Last Name:</label>
        <input type="text" name="lastName" id="last-name" className="input-control__input" required />
        <small className="input-control__message"></small>
      </div>
      <div className="checkout-form__email input-control">
        <label htmlFor="email" className="input-control__label">Email:</label>
        <input type="email" name="email" id="email" className="input-control__input" required />
        <small className="input-control__message"></small>
      </div>
      <button type="submit" className="checkout-form__submit-button">Book</button>
    </form>
  )
}

export default CheckoutForm