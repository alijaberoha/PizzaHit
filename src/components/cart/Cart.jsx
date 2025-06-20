import { useDispatch, useSelector } from "react-redux"
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
    
    // Check if cart is empty
    const isCartEmpty = cart.length === 0
    
    const handleModify = (item) => {
        navigate(`/Pizza/${item.name}`, {
            state: { 
                editMode: true,
                cartItemId: item.id,
                removedIngredients: item.customizations 
            }
        })
    }

    const handleCheckout = () => {
        if (!isCartEmpty) {
            dispatch(viderCart());
            navigate('/confirmation');
        }
    }

    return(
        <div className="cart-container">
            <div className="cart">
                <h2 className="cart-title">Panier d'achat</h2>
                
                <div className="cart-content">
                    {isCartEmpty ? (
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
                                            <div className="cart-buttons">
                                            <button 
                                                className="modify-btn" 
                                                onClick={() => handleModify(element)}
                                            >
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
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            
            {/* Always show the checkout section but apply disabled styles when cart is empty */}
            <div className="checkout-section">
                 <div className="cart-shipping-section">
                    <span className="total-label">Livraison</span>
                    <span className="total-value">€1.99</span>
                </div>
                <div className="cart-total-section">
                    <span className="total-label">Total</span>
                    <span className="total-value">€{isCartEmpty ? '0.00' : totalPrice}</span>
                </div>
                
                <button 
                    className={`checkout-button ${isCartEmpty ? 'disabled' : ''}`}
                    onClick={handleCheckout}
                    disabled={isCartEmpty}
                >
                    <span className="checkout-quantity">{totalItems || 0}</span>
                    <span className="checkout-text">Commander</span>
                    <span className="checkout-price">€{isCartEmpty ? '0.00' : totalPrice}</span>
                </button>
            </div>
        </div>
    )
}