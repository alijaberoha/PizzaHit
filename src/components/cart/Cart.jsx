import { useDispatch, useSelector } from "react-redux"
import "../../features/home/home.css"
import { supprimer } from "../../features/home/homeSlice"


export default function Cart() {
    const cart = useSelector(state => state.pizza.cart)
    const dispatch = useDispatch()

    return(
        <> 
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
</>
        
    )
}