import './index.css'
import {FaStar, FaRupeeSign} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import FoodItem from '../FoodItem'

class RestaurantDetails extends Component {
  state = {
    restaurantData: {},
    foodItemList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    this.setState({
      isLoading: true,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        costForTwo: data.cost_for_two,
        cuisine: data.cuisine,
        foodItems: data.food_items,
        id: data.id,
        imageUrl: data.image_url,
        itemsCount: data.items_count,
        location: data.location,
        name: data.name,
        opensAt: data.opens_at,
        rating: data.rating,
        reviewsCount: data.reviews_count,
      }
      const updatedFoodItems = data.food_items.map(eachFoodItem => ({
        cost: eachFoodItem.cost,
        foodType: eachFoodItem.food_type,
        id: eachFoodItem.id,
        imageUrl: eachFoodItem.image_url,
        name: eachFoodItem.name,
        rating: eachFoodItem.rating,
      }))
      this.setState({
        restaurantData: updatedData,
        foodItemList: updatedFoodItems,
        isLoading: false,
      })
    }
  }

  render() {
    const {restaurantData, foodItemList, isLoading} = this.state
    const {
      name,
      imageUrl,
      cuisine,
      location,
      rating,
      costForTwo,
      reviewsCount,
    } = restaurantData
    return (
      <>
        <Header activeTab="HOME" />
        {isLoading ? (
          <div
            data-testid="restaurants-details-loader"
            className="carousel-loader"
          >
            <Loader type="TailSpin" color="#F7931E" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="restaurant-details-container">
              <div className="restaurant-details">
                <img
                  src={imageUrl}
                  alt="restaurant"
                  className="restaurant-detail-image"
                />
                <div>
                  <h1 className="restaurant-details-heading">{name}</h1>
                  <p className="restaurant-details-cuisine">{cuisine}</p>
                  <p className="location">{location}</p>
                  <div className="details-container">
                    <div>
                      <p className="ratings">
                        <FaStar className="rating-star" />
                        {rating}
                      </p>
                      <p className="ratings-count">{reviewsCount}+ Ratings</p>
                    </div>
                    <hr className="vertical-line" />
                    <div>
                      <p className="cost">
                        <FaRupeeSign />
                        {costForTwo}
                      </p>
                      <p className="cost-for-two">Cost for two</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="food-item-list">
              {foodItemList.map(eachFoodItem => (
                <FoodItem
                  foodItemDetails={eachFoodItem}
                  key={eachFoodItem.id}
                />
              ))}
            </ul>
          </>
        )}
        <Footer />
      </>
    )
  }
}
export default RestaurantDetails
