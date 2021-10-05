import './index.css'
import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {ImStarFull} from 'react-icons/im'
import {FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

class FoodItem extends Component {
  state = {quantity: 0}

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem, addQuantity, decreaseQuantity} = value
          const {quantity} = this.state
          const {foodItemDetails} = this.props
          const {id, imageUrl, name, cost, rating} = foodItemDetails

          const onClickAddToCart = () => {
            this.setState(
              prevState => ({
                quantity: prevState.quantity + 1,
              }),
              addCartItem({...foodItemDetails, quantity: 1}),
            )
          }

          const onAddQuantity = () => {
            this.setState(prevState => ({
              quantity: prevState.quantity + 1,
            }))
            addQuantity(id)
          }

          const onDecreaseQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decreaseQuantity(id)
          }

          return (
            <li data-testid="foodItem" className="food-item">
              <img src={imageUrl} alt="food-item" className="food-item-image" />
              <div>
                <h1 className="food-name">{name}</h1>
                <div className="cost-container">
                  <FaRupeeSign />
                  <p className="food-cost">{cost}</p>
                </div>
                <div className="rating-container">
                  <ImStarFull className="star" />
                  <p className="rating">{rating}</p>
                </div>

                {quantity === 0 ? (
                  <button
                    onClick={onClickAddToCart}
                    className="add-button"
                    type="button"
                  >
                    Add
                  </button>
                ) : (
                  <div className="cart-quantity-container">
                    <button
                      data-testid="decrement-count"
                      onClick={onDecreaseQuantity}
                      type="button"
                      className="quantity-controller-button"
                    >
                      <BsDashSquare
                        className="quantity-controller-icon"
                        color="#52606D"
                        size={12}
                      />
                    </button>
                    <p data-testid="active-count" className="cart-quantity">
                      {quantity}
                    </p>
                    <button
                      data-testid="increment-count"
                      onClick={onAddQuantity}
                      type="button"
                      className="quantity-controller-button"
                    >
                      <BsPlusSquare
                        className="quantity-controller-icon"
                        color="#52606D"
                        size={12}
                      />
                    </button>
                  </div>
                )}
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default FoodItem
