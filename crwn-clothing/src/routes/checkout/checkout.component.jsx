import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>商品</span>
        </div>
        <div className="header-block">
          <span>描述</span>
        </div>
        <div className="header-block">
          <span>数量</span>
        </div>
        <div className="header-block">
          <span>价格</span>
        </div>
        <div className="header-block">
          <span>移除</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <span className="total">Total: {cartTotal}</span>
    </div>
  );
};

export default Checkout;
