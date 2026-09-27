import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct } from "../../slice/productsSlice";

function Footer() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="sec-footer">
        <div className="custom-shape-divider-bottom-1783081569">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="contactSec">
          <div className="container-felid">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="colOne">
                  <h2>RoyalStep</h2>
                  <p>
                    Crafting confidence with every step. Discover footwear
                    designed for comfort, quality, and timeless style.
                  </p>
                  <div className="contact-icons">
                    <i className="bi bi-geo-alt"></i>
                    <p>Iran - Tehran</p>
                  </div>
                  <div className="contact-icons">
                    <i className="bi bi-instagram"></i>
                    <p>Instagram</p>
                  </div>
                  <div className="contact-icons">
                    <i className="bi bi-telegram"></i>
                    <p>Telegram</p>
                  </div>
                  <div className="contact-icons">
                    <i className="bi bi-whatsapp"></i>
                    <p>Whatsapp</p>
                  </div>
                  <div className="contact-num">
                    <h5>Number :</h5>
                    <p>12 34567891</p>
                  </div>
                  <div className="contact-phone">
                    <h5>Number Phone :</h5>
                    <p>+99876543219</p>
                  </div>
                  <p className="copy-right">{"\u00A9"} 2026 RoyalStep</p>
                  <p className="developer">Designed & Developed by Neoma Studio.</p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="colTwo">
                  <div>
                    <Link
                      to="/products/sneakers"
                      onClick={() => dispatch(selectProduct("sneakers"))}
                    >
                      Sneakers
                    </Link>
                    <Link
                      to="/products/formal"
                      onClick={() => dispatch(selectProduct("formal"))}
                    >
                      Formals
                    </Link>
                    <Link
                      to="/products/hiking"
                      onClick={() => dispatch(selectProduct("hiking"))}
                    >
                      Hiking
                    </Link>
                    <Link
                      to="/products/kids"
                      onClick={() => dispatch(selectProduct("kids"))}
                    >
                      Kids
                    </Link>
                    <Link
                      to="/products/sandals"
                      onClick={() => dispatch(selectProduct("sandals"))}
                    >
                      Sandals
                    </Link>
                    <Link
                      to="/products/boots"
                      onClick={() => dispatch(selectProduct("boots"))}
                    >
                      Boots
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="colThree">
                  <div>
                    <Link
                      to="/profile"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/cart"
                    >
                      Cart
                    </Link>
                    <Link
                      to="/order"
                    >
                      Orders
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
