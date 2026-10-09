import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function IconSectionHome() {
  return (
    <>
      <div className="container-felid div-icons">
        <div className="row sec-icons">
          <div className="col-4 col-md-2">
            <div className="icons">
              <img src={`${import.meta.env.BASE_URL}icons/sneakers.png`} alt="sneakers" />
              <p>Motion</p>
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div className="icons">
              <img src={`${import.meta.env.BASE_URL}icons/formal.png`} alt="dress shoes" />
              <p>Shine</p>
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div className="icons">
              <img src={`${import.meta.env.BASE_URL}icons/hiking.png`} alt="hiking" />
              <p>Adventure</p>
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div className="icons">
              <img src={`${import.meta.env.BASE_URL}icons/boots.png`} alt="boots" />
              <p>Warmth</p>
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div className="icons">
              <img src={`${import.meta.env.BASE_URL}icons/sandals.png`} alt="sandals" />
              <p>Comfort</p>
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div className="icons">
              <img src={`${import.meta.env.BASE_URL}icons/kids.png`} alt="kits shoes" />
              <p>Growth</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconSectionHome;
