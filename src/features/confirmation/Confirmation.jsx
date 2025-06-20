import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/nav/Nav";
import "./confirmation.css";

export default function Confirmation() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // You might want to clear the cart here after successful order
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="confirmation-container">
        <div className="confirmation-card">
          <div className="check-container">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          
          <h1 className="confirmation-title">Commande confirmée !</h1>
          <p className="confirmation-message">
            Merci pour votre commande. Votre pizza sera bientôt en route !
          </p>
          
          <button 
            className="return-home-button"
            onClick={() => navigate('/')}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </>
  );
}