function ProductCard({ productDetails }) {

  const handleAddToCart = (e) => {
    if (productDetails.availability) {

      //add product to context

      //update the classname to --added or change opacity?
      e.target.classList.toggle("button__add-to-cart--added")
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
        <button type="button" onClick={handleAddToCart} id={productDetails.id} className={` button__add-to-cart ${productDetails.availability ? "button__add-to-cart--available" : "button__add-to-cart--unavailable"}`}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard