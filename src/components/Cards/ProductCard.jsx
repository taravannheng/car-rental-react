function ProductCard({ productDetails }) {
  return (
    <div className="card">
      {/* <div className="card__media" style={{ backgroundImage: `url(${productDetails.imgUrl})` }}></div>
      <div className="card__content">
        <h1 className="content__title">{productDetails.brand + productDetails.model + productDetails.modelYear}</h1>
        <div className="content__details">
            <ul className="details__labels">
                <li className="labels__category">Category: </li>
                <li className="labels__mileage">Mileage: </li>
                <li className="labels__fuel-type">Fuel Type: </li>
                <li className="labels__seats">Seats: </li>
                <li className="labels__price-per-day">Price Per Day: </li>
                <li className="labels__availability">Availability: </li>
            </ul>
            <ul class="details__texts">
                <li className="texts__category">${productDetails.category}</li>
                <li className="texts__mileage">${Number(productDetails.mileage).toLocaleString()} kms</li>
                <li className="texts__fuel-type">${productDetails.fuelType}</li>
                <li className="texts__seat">${productDetails.seats}</li>
                <li className="texts__price-per-day">$${productDetails.pricePerDay}</li>
                <li className="texts__availability">${productDetails.availability}</li>
            </ul>
        </div>
        <div className="details__description">
            <p className="description__text">{productDetails.description}</p>
        </div>
      </div> */}
      <div className="card__media" style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/car-rental-8cd87.appspot.com/o/x-trail.jpg?alt=media&token=df930e05-30a7-4c41-8dc6-41aa0281196c")` }}></div>
      <div className="card__content">
        <h1 className="content__title">Nissan X-trail 2015</h1>
        <div className="content__details">
            <ul className="details__labels">
                <li className="labels__category">Category: </li>
                <li className="labels__mileage">Mileage: </li>
                <li className="labels__fuel-type">Fuel Type: </li>
                <li className="labels__seats">Seats: </li>
                <li className="labels__price-per-day">Price Per Day: </li>
                <li className="labels__availability">Availability: </li>
            </ul>
            <ul className="details__texts">
                <li className="texts__category">SUV</li>
                <li className="texts__mileage">36,782 kms</li>
                <li className="texts__fuel-type">Petrol</li>
                <li className="texts__seat">7</li>
                <li className="texts__price-per-day">360</li>
                <li className="texts__availability">true</li>
            </ul>
        </div>
        <div className="details__description">
            <p className="description__text">The 2017 Volkswagen Golf is a good choice in the compact car class. It features fun handling dynamics, and its standard and available engines provide plenty of power for everyday driving. The Golf also boasts a refined cabin and one of the largest cargo areas in the class.</p>
        </div>
      </div>
      <div className="card__add-to-cart">
        <button type="button" className="button primary-button button__add-to-cart">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard