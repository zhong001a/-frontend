import React from "react";
import "./cart-item.scss";
const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <React.Fragment>
      <div>
        <div className="cart-item-container">
          <table className="header">
            <tr>
              <td className="td-image">
                <img className="image" src={imageUrl} alt={`${name}`} />
              </td>
              <td className="td-name">
                <span className="name">{name}</span>
              </td>
              <td className="td-price">
                <span className="price">
                  {quantity} x ${price.toLocaleString()}
                </span>
              </td>

            </tr>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
