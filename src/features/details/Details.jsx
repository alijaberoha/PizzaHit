import { useParams, useNavigate, useLocation } from "react-router-dom" // Add useLocation
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { ajouter, supprimer } from "../home/homeSlice"
import Navbar from "../../components/nav/Nav"
import "./details.css"
import Cart from "../../components/cart/cart"

export default function Details() {
    const { name } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation() 
    
    // Check if we're editing an existing cart item
    const editMode = location.state?.editMode || false
    const cartItemId = location.state?.cartItemId
    
    // Get all pizzas
    const pizza = useSelector(state => 
        state.pizza.allPizzas.find(pizza => pizza.name === name)
    )
    
    // Get cart items
    const cartItems = useSelector(state => state.pizza.cart)
    
    // Initialize selected ingredients
    const [selectedIngredients, setSelectedIngredients] = useState([])
    
    useEffect(() => {
        if (pizza) {
            if (editMode && cartItemId) {
                const cartItem = cartItems.find(item => item.id === cartItemId)
                
                if (cartItem && cartItem.customizations) {
       
                    const removedText = cartItem.customizations;
                    
                    const initialIngredients = pizza.ingredients.map(ing => {
                        const isRemoved = removedText.toLowerCase().includes(ing.name.toLowerCase());
                        
                        return {
                            ...ing,
                            selected: !isRemoved,
                            quantity: 1
                        };
                    });
                    
                    setSelectedIngredients(initialIngredients);
                } else {
                    setSelectedIngredients(
                        pizza.ingredients.map(ing => ({ ...ing, selected: true, quantity: 1 }))
                    );
                }
            } else {
                setSelectedIngredients(
                    pizza.ingredients.map(ing => ({ ...ing, selected: true, quantity: 1 }))
                );
            }
        }
    }, [pizza, editMode, cartItemId, cartItems]);
    
    // Toggle ingredient selection
    const toggleIngredient = (index) => {
        const newIngredients = [...selectedIngredients]
        newIngredients[index].selected = !newIngredients[index].selected
        setSelectedIngredients(newIngredients)
    }
    
    // Generate text for removed ingredients
    const getRemovedIngredientsText = () => {
        const removedIngredients = selectedIngredients
            .filter(ing => !ing.selected)
            .map(ing => ing.name.toLowerCase())
            
        if (removedIngredients.length === 0) return ''
        
        return `sans ${removedIngredients.join(', ')}`
    }
    
    // Handle adding to cart
    const handleAddToCart = () => {
        // If editing, remove the original item first
        if (editMode && cartItemId) {
            dispatch(supprimer({ id: cartItemId }))
        }
        
        // Add the new/modified item
        const customizedPizza = {
            ...pizza,
            ingredients: selectedIngredients.filter(ing => ing.selected),
            customizations: getRemovedIngredientsText()
        }
        
        dispatch(ajouter(customizedPizza))
        navigate('/')
    }

    if (!pizza) {
        return <div>Pizza not found</div>
    }

    return(
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
                            
                            <div>
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
                                                <button 
                                                    className={`control-button ${!ingredient.selected ? 'active' : ''}`}
                                                    onClick={() => toggleIngredient(index)}
                                                >
                                                    {ingredient.selected ? '−' : '+'}
                                                </button>
                                                <span className="ingredient-quantity">
                                                    {ingredient.quantity}
                                                </span>
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
                            
                            {/* Change "Ajouter au panier" to "Modifier" when in edit mode */}
                            <button 
                                className="add-to-cart-button"
                                onClick={handleAddToCart}
                            >
                                {editMode ? 'Mise à jour du panier ' : 'Ajouter au panier '}
                                  
                                €{pizza.price.toFixed(2)}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="carte-details">
                <Cart />

                </div>
            </div>
        </>
    )
}