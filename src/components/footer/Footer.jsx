import './nav.css';
import logo from '../../assets/logo.webp'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="Pizza Hut"
        />
      </div>
      <div className="center-link">Pizza</div>
      <div className="nav-actions">
        <button className="login-btn">Se connecter</button>
        <div className="lang-selector">FR </div>
      </div>
    </nav>
  );
}
