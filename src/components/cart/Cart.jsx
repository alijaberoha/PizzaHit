import { useDispatch, useSelector } from "react-redux"
import "../../features/home/home.css"
import { supprimer, viderCart, augmenterQuantite, diminuerQuantite } from "../../features/home/homeSlice"
import { useNavigate } from "react-router-dom"
import "./cart.css"

export default function Cart() {
    const cart = useSelector(state => state.pizza.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // Calculate total price accounting for quantities
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)
    
    // Calculate total items count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    const handleCheckout = () => {
        if (cart.length > 0) {
            dispatch(viderCart());
            navigate('/confirmation');
        } else {
            alert("Votre panier est vide");
        }
    }

    return(
        <div className="cart">
            <h2 className="cart-title">Panier d'achat</h2>
            
            <div className="cart-content">
                {cart.length === 0 ? (
                    <p className="empty-cart">Panier vide</p>
                ) : (
                    <>
                        {cart.map((element, index) => (
                            <div key={index} className="cart-item">
                                <div className="cart-item-header">
                                    <h3 className="cart-item-name">{element.name}</h3>
                                    <span className="cart-item-price">€{(element.price * element.quantity).toFixed(2)}</span>
                                </div>
                                
                                {element.customizations && (
                                    <div className="cart-item-variant">
                                        {element.customizations}
                                    </div>
                                )}
                                
                                <div className="cart-item-actions">
                                    <div className="quantity-control">
                                        <button 
                                            className="quantity-btn"
                                            onClick={() => dispatch(diminuerQuantite(element))}
                                            disabled={element.quantity <= 1}
                                        >
                                            −
                                        </button>
                                        <span className="quantity-value">{element.quantity}</span>
                                        <button 
                                            className="quantity-btn"
                                            onClick={() => dispatch(augmenterQuantite(element))}
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <div className="cart-buttons">
                                        <button className="modify-btn" onClick={() => navigate(`/Pizza/${element.name}`)}>
                                            Modifier
                                        </button>
                                        <button 
                                            className="delete-btn"
                                            onClick={() => dispatch(supprimer(element))}
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            
         
                <div className="cart-footer">
                    <div className="cart-total-section">
                        <span className="total-label">Total</span>
                        <span className="total-value">€{totalPrice}</span>
                    </div>
                    
                    <button 
                        className="checkout-button"
                        onClick={handleCheckout}
                    >
                        <span className="checkout-quantity">{totalItems}</span>
                        <span className="checkout-text">Commander</span>
                        <span className="checkout-price">€{totalPrice}</span>
                    </button>
                </div>
        
        </div>
    )
}