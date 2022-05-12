import { useState, createContext } from "react"


const CheckoutContext = createContext()

const CheckoutProvider = ({ children }) => {
  const [isValidToCheckout, setIsValidToCheckout] = useState(false)

  return <CheckoutContext.Provider value={{
    isValidToCheckout,
    setIsValidToCheckout
  }}>
    {children}
  </CheckoutContext.Provider>
}

export {CheckoutProvider}
export default CheckoutContext