import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function QuestionSec() {
  return (
    <>
      <div className="container-felid div-question">
        <div className="row sec-question">
          <div className="col-12 question">
            <h2>Why Choose RoyalStep ?</h2>
          </div>
          <div className="col-6 col-md-3">
            <div className="buyCarts">
              <i className="bi bi-truck"></i>
              <p>Free Shipping</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="buyCarts">
                <i className="bi bi-gem"></i>
              <p>Premium Quality</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="buyCarts">
                <i className="bi bi-lock"></i>
              <p>Secure Payment</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="buyCarts">
                <i className="bi bi-arrow-clockwise"></i>
              <p>Easy Returns</p>
            </div>
          </div>
          <div className="brush"></div>
        </div>
      </div>
    </>
  );
}

export default QuestionSec;
