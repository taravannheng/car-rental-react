import Header from "../../patterns/Header/Header"
import CheckoutForm from "../../patterns/Forms/CheckoutForm"

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <main className="checkout">
        <CheckoutForm />
      </main>
    </>
  )
}

export default CheckoutPage