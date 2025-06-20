import './nav.css';
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className='navbar'>
            <div className='logo'>
        <Link to="/" className="logo-link">
                    <img src={logo} alt="Pizza Hut" className="logo" />
                </Link>
            </div>
            <div className='center-link'>Pizza</div>
            <div className='nav-actions'>
            <button className="login-btn">Se connecter</button>
            <div className='lang-selector'>FR</div>
            </div>
        </nav>
    )
}