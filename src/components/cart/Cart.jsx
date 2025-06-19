import { useDispatch, useSelector } from "react-redux"
import "../../features/home/home.css"
import { supprimer } from "../../features/home/homeSlice"


export default function Cart() {
    const cart = useSelector(state => state.pizza.cart)
    const dispatch = useDispatch()
    
    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)

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
                                <img src={element.image} alt={element.name} />
                                <div className="cart-item-details">
                                    <div>{element.name}</div>
                                    <div>€{element.price.toFixed(2)}</div>
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
            
            {cart.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total</span>
                        <span>€{totalPrice}</span>
                    </div>
                    
                    <button className="checkout-button">
                        Commander €{totalPrice}
                    </button>
                </div>
            )}
        </div>
    )
}