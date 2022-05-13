import Header from "../../patterns/Header/Header"
import CheckoutForm from "../../patterns/Forms/CheckoutForm"

function CheckoutPage() {
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