import { useDispatch, useSelector } from "react-redux";
import "../styles/order.css";
import type { RootState } from "../store/store";
import EmptySection from "./emptysection";
import "bootstrap-icons/font/bootstrap-icons.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../slice/cartSlice";
import { setStatus, waiting } from "../slice/orderSlice";
import ButtonBack from "./buttonBack";

function Orders() {
  const orderItems = useSelector((state: RootState) => state.order.items);
  const profile = useSelector((state: RootState) => state.profile.items);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const totalPrice = orderItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const handleClick = () => {
    if (!profile) {
      toast.warning("Please complete your profile first.")
      dispatch(waiting("processing"));
      navigate("/profile");
      return;
    }
      toast.success("Thank you! Your order is on its way.")
      dispatch(setStatus());
      dispatch(clearCart());
  }
  return (
    <>
      <div className="parentSectionOrder">
        {orderItems.length > 0 ? (
          <div className="orderPage">
            {orderItems.map((item) => (
              <div className="orderSec" key={item.id}>
                <img src={item.img} />
                <div className="cart-title">
                  <h6>{item.title}</h6>
                </div>
                <div className="cart-content">
                  <div className="div">
                    <h6>Color : </h6>
                    <span
                      className="colorBox"
                      style={{ backgroundColor: item.color }}
                    ></span>
                  </div>
                  <div className="div">
                    <h6>Size : </h6>
                    <p>{item.size}</p>
                  </div>
                </div>
                <div className="cart-specif">
                  <div className="cart-quant">
                    <h6>Quantity:</h6>
                    <p>{item.quantity}</p>
                  </div>
                  <div className="cart-price">
                    <h6>Price:</h6>
                    <p>{item.price}$</p>
                  </div>
                </div>
                <div className="cart-status">
                  {item.status === "pending" && (
                    <i className="bi bi-clock-history"></i>
                  )}
                  {item.status === "processing" && (
                    <i className="bi bi-arrow-repeat"></i>
                  )}
                  {item.status === "paid" && (
                    <i className="bi bi-patch-check"></i>
                  )}
                </div>
                
              </div>
            ))}
            <div className="totaling">
              <div className="total-price">
                <h3>Total :</h3>
                <h5>{totalPrice}$</h5>
              </div>
              <div className="buy-btn">
                <input type="button" value="Pay" onClick={handleClick}/>
              </div>
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

export default Orders;
