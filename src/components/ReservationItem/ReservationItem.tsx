import { FC } from 'react'
import ProductDetails from '../../models/ProductDetails';

import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';

const ReservationItem: FC<ProductDetails> = ({ productDetails }) => {

  const dispatch = useDispatch();

  const handleDelete = (e): void => {
    const carID = e.target.closest('.reservation-item').id;
    dispatch(cartActions.remove(carID));
  }

  return (
    <ul className="reservation-item" id={productDetails.id}>
      <li className="reservation-item__vehicle">
        <div className="vehicle__img" style={{ backgroundImage: `url(${productDetails.imgUrl})`}}></div>
        <div className="vehicle__details">
          <span className="vehicle__name">{`${productDetails.brand} ${productDetails.model} ${productDetails.modelYear}`}</span>
        </div>
      </li>
      <li className="reservation-item__price-per-day">${productDetails.pricePerDay}</li>
      <li className="reservation-item__delete-button">
        <button type="button" className='button--primary button--warning' onClick={handleDelete}>
          <span className="button__text">Remove</span>
        </button>
      </li>
    </ul>
  )
}

export default ReservationItem