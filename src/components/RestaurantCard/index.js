import {Link} from 'react-router-dom'

import './index.css'

import {ImStarFull} from 'react-icons/im'

const RestaurantCard = props => {
  const {restaurantData} = props
  const {id, name, imageUrl, cuisine, userRating} = restaurantData

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link-item">
      <li data-testid="restaurant-item" className="restaurant-item">
        <img src={imageUrl} alt="restaurant" className="restaurant-image" />
        <div>
          <h1 className="name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="rating-container">
            <ImStarFull className="star" />
            <p className="rating">{userRating.rating}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantCard
