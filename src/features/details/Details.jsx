import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { ajouter } from "../home/homeSlice"
import "./details.css"
import Cart from "../../components/cart/cart"
import Navbar from "../../components/nav/Nav"

export default function Details() {
    const { name } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const pizza = useSelector(state => 
        state.pizza.allPizzas.find(pizza => pizza.name === name)
    )

    if (!pizza) {
        return <div>Pizza not found</div>
    }

    return (
        <>
        <Navbar/>
            <div className="all-details">
            <div className="main-details">
            <button className="back-button" onClick={() => navigate(-1)}>
                ← Back
            </button>
            
            <div className="details-container">
                <div className="image-details">
                    <img src={pizza.image} alt={pizza.name} />
                </div>

                <div className="info-details">
                    <h1>{pizza.name}</h1>
                    <p className="description">{pizza.description}</p>
                    <div className="price-section">
                        <span className="price">€{pizza.price.toFixed(2)}</span>
                        <button 
                            className="add-to-cart"
                            onClick={() => {
                                dispatch(ajouter(pizza))
                                navigate('/')
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>

                    <div className="ingredients-section">
                        <h2>Ingredients</h2>
                        <div className="ingredients-list">
                            {pizza.ingredients.map(ingredient => (
                                <div key={ingredient.name} className="ingredient-item">
                                    <span>{ingredient.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Cart/>
        </div>
        </>
        
        
    )
}