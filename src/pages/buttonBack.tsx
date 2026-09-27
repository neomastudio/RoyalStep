import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/buttonBack.css';
import { useNavigate } from "react-router-dom";

function ButtonBack() {
    const navigate = useNavigate();
    return(
        <>
        <div className="button-back" onClick={() => navigate(-1)}>
            <i className="bi bi-arrow-left"></i>
            <p>Back</p>
        </div>
        </>
    )
}

export default ButtonBack;