import {Link} from 'react-router-dom'

import {FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

import './index.css'

const CartTotal = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalOrderCost = 0
      cartList.forEach(eachCartItem => {
        totalOrderCost += eachCartItem.cost * eachCartItem.quantity
      })

      return (
        <>
          <hr />
          <div className="cart-summary-container">
            <h1 className="order-total-value">Order Total:</h1>
            <div className="total-container">
              <p data-testid="total-price" className="total">
                <FaRupeeSign /> {totalOrderCost}
              </p>
              <Link to="/payment">
                <button type="button" className="order-button">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartTotal
