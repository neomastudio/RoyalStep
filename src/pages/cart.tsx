import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import "../styles/cart.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeQuantity,
} from "../slice/cartSlice";
import EmptySection from "./emptysection";
import { Link } from "react-router-dom";
import { setOrder } from "../slice/orderSlice";
import ButtonBack from "./buttonBack";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const handleCheckout = () => {
    const orders = cartItems.map((item) => ({ ...item, status: "pending" as "pending"}));
    dispatch(setOrder(orders));
    localStorage.setItem("order", JSON.stringify(cartItems));
  };

  return (
    <>
      <div className="carts">
        {cartItems.map((item) => (
          <div className="cartBox" key={item.id}>
            <div className="cart-pic">
              <img src={item.img} />
            </div>
            <div className="cart-content">
              <h3>{item.title}</h3>
              <div className="div">
                <span>Color : </span>
                <span
                  className="colorBox"
                  style={{ backgroundColor: item.color }}
                ></span>
              </div>
              <div className="div">
                <span>Size : </span>
                <p>{item.size}</p>
              </div>
            </div>
            <div className="cart-quant">
              <h6>Quantity:</h6>
              <div className="div sec-quant">
                <button
                  onClick={() =>
                    dispatch(
                      decreaseQuantity({
                        id: item.id,
                        color: item.color,
                        size: item.size,
                      }),
                    )
                  }
                >
                  -
                </button>
                <h5>{item.quantity}</h5>
                <button
                  onClick={() =>
                    dispatch(
                      increaseQuantity({
                        id: item.id,
                        color: item.color,
                        size: item.size,
                      }),
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="cart-price">
              <h6>Price:</h6>
              <h5>{item.price}$</h5>
              <span className="icon-trash">
                <i
                  className="bi bi-trash-fill"
                  onClick={() =>
                    dispatch(
                      removeQuantity({
                        id: item.id,
                        color: item.color,
                        size: item.size,
                      }),
                    )
                  }
                ></i>
              </span>
            </div>
          </div>
        ))}
        {cartItems.length > 0 ? (
          <div className="totaling">
            <div className="total-price">
              <h3>Total :</h3>
              <h5>{totalPrice}$</h5>
            </div>
            <div className="buy-btn">
              <Link to="/order" className="button" onClick={handleCheckout}>
                Buy
              </Link>
            </div>
          </div>
        ) : (
          <EmptySection />
        )}
        <ButtonBack/>
      </div>
    </>
  );
}

export default Cart;
