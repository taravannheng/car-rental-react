import { FC, ReactNode, useState, createContext } from "react"
import ProductDetails from '../models/ProductDetails'

interface Props {
  children: ReactNode;
}

const CartContext = createContext(null)

const CartProvider: FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<ProductDetails[]>([])

  return <CartContext.Provider value={{
    cart,
    setCart
  }}>
    {children}
  </CartContext.Provider>
}

export {CartProvider}
export default CartContext