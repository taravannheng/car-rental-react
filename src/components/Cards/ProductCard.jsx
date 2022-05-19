import { useContext } from 'react'
import CartContext from "../../contexts/cartContext"
import Button from '../Buttons/Button'

function ProductCard({ productDetails }) {

  const { setCart } = useContext(CartContext)

  const handleAddToCart = (e) => {
    if (productDetails.availability) {

      //add or remove product from context
      if (e.target.classList.contains("button--selected")) {
        setCart(cart => (cart.filter((car, index) => car.id !== productDetails.id)))
      } else {
        setCart(cart => ([...cart, productDetails]))
      }

      //update the classname
      e.target.classList.toggle("button--selected")

      //change text
      if (e.target.classList.contains("button--selected")) {
        e.target.innerText = "Added to Cart"
      } else {
        e.target.innerText = "Add to Cart"
      }
    }
  }

  return (
    <div className="card">
      <div className="card__media" style={{ backgroundImage: `url(${productDetails.imgUrl})` }}></div>
      <div className="card__content">
        <h1 className="content__title">{`${productDetails.brand} ${productDetails.model} ${productDetails.modelYear}`}</h1>
        <div className="content__details">
            <ul className="details__labels">
                <li className="labels__category">Category: </li>
                <li className="labels__mileage">Mileage: </li>
                <li className="labels__fuel-type">Fuel Type: </li>
                <li className="labels__seats">Seats: </li>
                <li className="labels__price-per-day">Price Per Day: </li>
            </ul>
            <ul className="details__texts">
                <li className="texts__category">{productDetails.category}</li>
                <li className="texts__mileage">{Number(productDetails.mileage).toLocaleString()} kms</li>
                <li className="texts__fuel-type">{productDetails.fuelType}</li>
                <li className="texts__seat">{productDetails.seats}</li>
                <li className="texts__price-per-day">{productDetails.pricePerDay}</li>
            </ul>
        </div>
        <div className="details__description">
            <p className="description__text">{productDetails.description}</p>
        </div>
      </div>

      <div className="card__add-to-cart">
        <Button id={productDetails.id} type='button' className={`button--primary ${!productDetails.availability && 'button--warning'}`} handleClick={handleAddToCart}>{productDetails.availability ? 'Add to Cart' : 'Not Available'}</Button>
      </div>
    </div>
  )
}

export default ProductCard