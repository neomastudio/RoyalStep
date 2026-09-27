import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../slice/productsSlice";

function FeaturedBanner() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-felid feature">
        <div className="row">
          <div className="col-12 col-md-6 pt-5 order-2 order-md-1">
            <div className="sec-content">
              <h2>Every Step Matters</h2>
              <p>
                Discover footwear designed for every lifestyle. From everyday
                comfort to timeless elegance, RoyalStep helps you walk with
                confidence.
              </p>
              <Link to="/products/sneakers" onClick={() => dispatch(selectProduct("sneakers"))}>Buy It</Link>
            </div>
          </div>
          <div className="col-12 col-md-5 order-1 order-md-2">
            <div className="sec-photo">
              <img src="/feature-pic.jpg" />
              <img src="/feature-pic-1.jpg" className="childOne" />
              <img src="/feature-pic-2.jpg" className="childTwo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeaturedBanner;
