import { useDispatch, useSelector } from "react-redux"
import "./home.css"
import { ajouter } from "./homeSlice"
import Navbar from "../../components/nav/Nav"
import { NavLink } from "react-router-dom"
import Cart from "../../components/cart/cart"

export default function Home() {
    const pizzas = useSelector(state => state.pizza.allPizzas)
    const dispatch = useDispatch()

    return(
        <> 
        <Navbar/>

        <div className="menu-container">
            <div className="menu-grid">
                {pizzas.map(element => (
                    <NavLink key={element.name} to={`/Pizza/${element.name}`}>
                    <div className="menu-item">
                        {element.promo && <span className="promo-tag">Promo</span>}
                        <img 
                            src={element.image} 
                            alt={element.name} 
                            className="menu-image"
                        />
                        <div className="menu-info">
                            <h2 className="menu-name">{element.name}</h2>
                            <div className="price-container">
                                <p className="menu-price">€{element.price.toFixed(2)}</p>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(ajouter(element))
                                    }} 
                                    className="add-button"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    </NavLink>
                ))}
            </div>

            <Cart/>

        </div>
</>
        
    )
}