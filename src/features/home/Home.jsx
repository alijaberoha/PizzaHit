import { useDispatch, useSelector } from "react-redux"
import "./home.css"
import { ajouter, supprimer } from "./homeSlice"

export default function Home() {
    const pizzas = useSelector(state => state.pizza.allPizzas)
    const cart = useSelector(state => state.pizza.cart)
    const dispatch = useDispatch()

    return(
        <div className="menu-container">
            <div className="menu-grid">
                {pizzas.map(element => (
                    <div key={element.name} className="menu-item">
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
                                <button onClick={() => dispatch(ajouter(element))} className="add-button">+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart">
                <button className="cart-button">
                    🛒 Cart ({cart?.length || 0})
                </button>
                
                <div className="cart-content">
                    <h3>Panier d'achat</h3>
                    {cart.length === 0 ? (
                        <p>Panier vide</p>
                    ) : (
                        <>
                            {cart.map(element => (
                                <div key={element.id} className="cart-item">
                                    <img src={element.img} alt={element.name} />
                                    <div className="cart-item-details">
                                        <span>{element.name}</span>
                                        <span>€{element.price.toFixed(2)}</span>
                                    </div>
                                    <button 
                                        className="remove-button"
                                        onClick={() => dispatch(supprimer(element))}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}