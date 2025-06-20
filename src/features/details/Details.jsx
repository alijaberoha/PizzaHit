import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { ajouter } from "../home/homeSlice"
import "./details.css"
import { useState } from "react"
import Cart from "../../components/cart/cart"
import Navbar from "../../components/nav/Nav"

export default function Details() {
    const { name } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const pizza = useSelector(state => 
        state.pizza.allPizzas.find(pizza => pizza.name === name)
    )
    
    const [selectedIngredients, setSelectedIngredients] = useState(
        pizza?.ingredients.map(ing => ({ ...ing, selected: true, quantity: 1 })) || []
    )

    const toggleIngredient = (index) => {
        setSelectedIngredients(selectedIngredients.map((ing, i) => {
            if (i === index) {
                // Toggle selected state and set quantity to 0 when deselected
                const newSelected = !ing.selected;
                return { 
                    ...ing, 
                    selected: newSelected,
                    quantity: newSelected ? 1 : 0 // Set to 0 when not selected
                };
            }
            return ing;
        }));
    }

    if (!pizza) {
        return <div>Pizza not found</div>
    }

    const getRemovedIngredientsText = () => {
        const removed = selectedIngredients.filter(ing => !ing.selected);
        if (removed.length === 0) return '';
        return removed.map(ing => `sans ${ing.name.toLowerCase()}`).join(', ');
    };

    return (
        <>
            <Navbar />
            <div className="all-details">
                <div className="main-details">
                    <div className="details-header">
                        <button className="back-button" onClick={() => navigate(-1)}>
                            ← Retour
                        </button>
                    </div>
                    
                    <div className="details-container">
                        <div className="details-image-container">
                            <img src={pizza.image} alt={pizza.name} className="details-image"/>
                        </div>
                        
                        <div className="details-info">
                            <div className="details-title-section">
                                <h1 className="details-title">{pizza.name}</h1>
                                <span className="details-price">€{pizza.price.toFixed(2)}</span>
                            </div>
                            
                            <p className="details-description">{pizza.description}</p>
                            
                            <div className="details-section">
                                <h2 className="section-title">Pâte à pizza</h2>
                                <div className="section-option">
                                    <div className="option-indicator">
                                        <span className="indicator-circle"></span>
                                    </div>
                                    <span className="option-name">Classic</span>
                                    <span className="option-action">Modifier</span>
                                </div>
                            </div>
                            
                            <div className="details-section">
                                <div className="section-header">
                                    <h2 className="section-title">Ingrédients</h2>
                                    <button className="section-toggle">
                                        <i className="arrow-up"></i>
                                    </button>
                                </div>
                                
                                <div className="ingredients-list">
                                    {selectedIngredients.map((ingredient, index) => (
                                        <div key={index} className="ingredient-item">
                                            <span className="ingredient-name">{ingredient.name}</span>
                                            <div className="ingredient-controls">
                                                <span className="ingredient-quantity">
                                                    {ingredient.quantity}
                                                </span>
                                                <button 
                                                    className={`control-button ${!ingredient.selected ? 'active' : ''}`}
                                                    onClick={() => toggleIngredient(index)}
                                                >
                                                    {ingredient.selected ? '−' : '+'}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Display removed ingredients preview */}
                                {getRemovedIngredientsText() && (
                                    <div className="removed-ingredients-preview">
                                        {getRemovedIngredientsText()}
                                    </div>
                                )}
                            </div>
                            
                            <button 
                                className="add-to-cart-button"
                                onClick={() => {
                                    const customizedPizza = {
                                        ...pizza,
                                        ingredients: selectedIngredients.filter(ing => ing.selected),
                                        removedIngredients: selectedIngredients.filter(ing => !ing.selected),
                                        customizations: getRemovedIngredientsText()
                                    }
                                    console.log("Dispatching pizza:", customizedPizza) // Add this line
                                    dispatch(ajouter(customizedPizza))
                                    navigate('/')
                                }}
                            >
                                Ajouter au panier €{pizza.price.toFixed(2)}
                            </button>
                        </div>
                    </div>
                </div>
                <Cart />
            </div>
        </>
    )
}