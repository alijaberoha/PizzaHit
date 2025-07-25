import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allPizzas: [
    {
      "name": "Jalapenos Nachos",
      "description": "Doritos Nachos, Poulet Kebab, Cheddar, Jalapños, Tomates en dés, Sauce Tomates, Mozzarella",
      "price": 20.10,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20250512134948432.png",
      "ingredients": [
        { "name": "Poulet Kebab", "icon": "kipkebab", "price": 2.20 },
        { "name": "Dés de tomates", "icon": "tomatoes", "price": 2.20 },
        { "name": "Jalapenos", "icon": "jalapeno", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Margherita",
      "description": "L'originale pizza de base, avec une sauce tomate et de la mozzarella",
      "price": 14.00,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163450743.jpg",
      "ingredients": [
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Falafel",
      "description": "Boulettes de falafel, coulis de basilic, tomates en dés, persil, sauce tomate, fromage vegan Violife",
      "price": 20.10,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20230310155103630.png",
      "ingredients": [
        { "name": "Dés de tomates", "icon": "tomatoes", "price": 2.20 },
        { "name": "Fromage vegan Violife", "icon": "violife", "price": 2.20 },
        { "name": "Falafel Ball", "icon": "falbal", "price": 2.20 }
      ]
    },
    {
      "name": "Pepperoni Lovers",
      "description": "Pepperoni en généreuse quantité sur une base tomate et mozzarella",
      "price": 15.00,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163536901.jpg",
      "ingredients": [
        { "name": "Pepperoni", "icon": "pepperoni", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 },
        { "name": "Champignons", "icon": "champ", "price": 2.20 }
      ]
    },
    {
      "name": "Garden Lovers",
      "description": "Champignons, poivrons verts, dés de tomates, oignons rouges, mozzarella et sauce tomate",
      "price": 16.00,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163156337.jpg",
      "ingredients": [
        { "name": "Champignons", "icon": "champ", "price": 2.20 },
        { "name": "Poivron vert", "icon": "grepap", "price": 2.20 },
        { "name": "Dés de tomates", "icon": "tomatoes", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Forestiere",
      "description": "Jambon, champignons, dés de tomates, mozzarella et sauce tomate",
      "price": 16.00,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163123958.jpg",
      "ingredients": [
        { "name": "Jambon", "icon": "ham", "price": 2.20 },
        { "name": "Champignons", "icon": "champ", "price": 2.20 },
        { "name": "Dés de tomates", "icon": "tomatoes", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Hawaiian",
      "description": "La douceur de l'ananas accompagnée de jambon, champignons, mozzarella et sauce tomate",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163251534.jpg",
      "ingredients": [
        { "name": "Ananas", "icon": "ananas", "price": 2.20 },
        { "name": "Jambon", "icon": "ham", "price": 2.20 },
        { "name": "Champignons", "icon": "champ", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Cheesam",
      "description": "Beaucoup de mozzarella, jambon et de la sauce tomate",
      "price": 15.00,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163026887.jpg",
      "ingredients": [
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 },
        { "name": "Jambon", "icon": "ham", "price": 2.20 }
      ]
    },
    {
      "name": "Hot 'n Spicy",
      "description": "Viande de boeuf épicée, piments verts, oignons rouges, dés de tomates, mozzarella et sauce tomate",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163326415.jpg",
      "ingredients": [
        { "name": "Viande de boeuf épicée", "icon": "beef", "price": 2.20 },
        { "name": "Piments verts", "icon": "chili", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Dés de tomates", "icon": "tomatoes", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Barbecue Chicken",
      "description": "Dés de poulet grillé, champignons, poivrons verts, oignons rouges, mozzarella et sauce barbecue",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406162902485.jpg",
      "ingredients": [
        { "name": "Poulet grillé", "icon": "charchick", "price": 2.20 },
        { "name": "Champignons", "icon": "champ", "price": 2.20 },
        { "name": "Poivron vert", "icon": "grepap", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Barbecue",
      "description": "Double portion de viande de boeuf épicée, tranches de bacon fumé, oignons rouges, mozzarella et sauce barbecue",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406162828439.jpg",
      "ingredients": [
        { "name": "Viande de boeuf épicée", "icon": "beef", "price": 2.20 },
        { "name": "Bacon fumé", "icon": "bacon", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Alsace",
      "description": "Lardons fumés, oignons rouges, champignons, sauce à l'ail, mozzarella, sauce tomate",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406162803685.jpg",
      "ingredients": [
        { "name": "Lardons fumés", "icon": "baconju", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Champignons", "icon": "champ", "price": 2.20 },
        { "name": "Sauce a l'ail", "icon": "garlicsc", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Suprême",
      "description": "Viande de boeuf épicée, pepperoni, champignons, poivron vert, oignon, mozzarella et sauce tomate",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163730364.jpg",
      "ingredients": [
        { "name": "Viande de boeuf épicée", "icon": "beef", "price": 2.20 },
        { "name": "Pepperoni", "icon": "pepperoni", "price": 2.20 },
        { "name": "Champignons", "icon": "champ", "price": 2.20 },
        { "name": "Poivron vert", "icon": "grepap", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Pepper",
      "description": "Double portion de viande de boeuf, dés de tomates, oignons rouges, sauce au poivre, mozzarella et sauce tomate",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220712145325983.jpg",
      "ingredients": [
        { "name": "Viande de boeuf épicée", "icon": "beef", "price": 2.20 },
        { "name": "Dés de tomates", "icon": "tomatoes", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Sauce au poivre", "icon": "peppersc", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Chicken Twist",
      "description": "Poulet kebab (halal), dés de tomates, oignons rouges, sauce à l'ail douce, mozzarella, sauce tomate",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163057498.jpg",
      "ingredients": [
        { "name": "Poulet Kebab", "icon": "kipkebab", "price": 2.20 },
        { "name": "Dés de tomates", "icon": "tomatoes", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Sauce a l'ail", "icon": "garlicsc", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Sweet Chicken Curry",
      "description": "Devenez le chef cuisto et composez votre pizza: sauce tomate, mozzarella +3 garnitures au choix.",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220504090424606.jpg",
      "ingredients": [
        { "name": "Ananas", "icon": "ananas", "price": 2.20 },
        { "name": "Poulet grillé", "icon": "charchick", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 },
        { "name": "Sauce curry douce", "icon": "currysc", "price": 2.20 }
      ]
    },
    {
      "name": "Pick & Mix",
      "description": "Devenez le chef cuisto et composez votre pizza: sauce tomate, mozzarella +3 garnitures au choix.",
      "price": 18.60,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163353600.jpg",
      "ingredients": [
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "4 Fromages",
      "description": "Emmental, fromage de chèvre, Fourme d'Ambert AOP, mozzarella et crème épaisse",
      "price": 20.10,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20250129162352075.jpg",
      "ingredients": [
        { "name": "Emmental", "icon": "emmental", "price": 2.20 },
        { "name": "Fromage de chèvre", "icon": "geit", "price": 2.20 },
        { "name": "Fourme d'Ambert", "icon": "bleu", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Grimbergen",
      "description": "Jambon italien \"parme\", champignons, mozzarella, crème épaisse et fromage d'abbaye Grimbergen",
      "price": 20.10,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406163225127.jpg",
      "ingredients": [
        { "name": "Jambon italien", "icon": "parma", "price": 2.20 },
        { "name": "Champignons", "icon": "champ", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 },
        { "name": "Fromage d'abbaye Grimbergen", "icon": "grimbergen", "price": 2.20 }
      ]
    },
    {
      "name": "Super Supreme",
      "description": "Viande de boeuf, viande de porc épicée, jambon, pepperoni, oignons rouges, champignons, poivron vert, olives noires, mozzarella et sauce tomate",
      "price": 20.10,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20240820094140285.jpg",
      "ingredients": [
        { "name": "Viande de boeuf épicée", "icon": "beef", "price": 2.20 },
        { "name": "Viande de porc", "icon": "porc", "price": 2.20 },
        { "name": "Jambon", "icon": "ham", "price": 2.20 },
        { "name": "Pepperoni", "icon": "pepperoni", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Champignons", "icon": "champ", "price": 2.20 },
        { "name": "Poivron vert", "icon": "grepap", "price": 2.20 },
        { "name": "Olives noires", "icon": "olives", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    },
    {
      "name": "Thon",
      "description": "Thon, oignons rouges, olives noires, persil, sauce tomate, mozzarella",
      "price": 20.10,
      "image": "https://cdn-catalog.pizzahut.be/images/be/20220406164029214.jpg",
      "ingredients": [
        { "name": "Thon", "icon": "tuna", "price": 2.20 },
        { "name": "Oignons Rouge", "icon": "redonion", "price": 2.20 },
        { "name": "Olives noires", "icon": "olives", "price": 2.20 },
        { "name": "Fromage mozzarella", "icon": "moza", "price": 2.20 }
      ]
    }
  ],
  cart: []
}

const homeSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers:{
            'ajouter': (state, action) => {
            // Check if we're editing by looking for existing item with same ID
            // This isn't needed anymore since we're removing the old item in the component
            
            // Add new item
            const newPizza = {
                id: Date.now(), // This will create a new ID
                name: action.payload.name,
                image: action.payload.image,
                price: action.payload.price,
                customizations: action.payload.customizations || '',
                quantity: 1 // Start with quantity 1 for new/modified items
            };
            state.cart.push(newPizza);
        },

        'augmenterQuantite': (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        
        'diminuerQuantite': (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else state.cart = state.cart.filter(item => item.id !== action.payload.id);

        },
        
        'supprimer': (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        
        'viderCart': (state) => {
            state.cart = [];
        }
    }
})

export const homeReducer = homeSlice.reducer
export const { ajouter, augmenterQuantite, diminuerQuantite, supprimer, viderCart } = homeSlice.actions