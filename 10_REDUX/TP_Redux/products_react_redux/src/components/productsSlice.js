import {createSlice} from '@reduxjs/toolkit'

const productsSlice = createSlice({ 
    name: 'product',
    initialState: {
        products :[
           /*  {id : 1,  title: "Pomme", price : "1.5€", isDisposed :false},
            {id : 2,  title : "Poire", price : "1€", isDisposed :true}, */
        ],
            
    counterProduct : 1
    },
    reducers :{
        addProduct: (state, action) =>{
            const newProduct = {
              id : Date.now(),
              title : action.payload.title,
              price : action.payload.price,
              isDisposed : false
             }
             state.products.push(newProduct)
             state.counterProduct += 1
         },
        deleteProduct: (state, action) => {  
            state.products = state.products.filter(product => product.id!== action.payload)
            alert("Voulez vous supprimer ce produit?")
         }  ,
        
         editProduct: (state, action) => {
            const product = state.products.map(product => product.id === action.payload)
            product.title = action.payload.title
            product.price = action.payload.price
         },
        changeStatusProduct: (state, action) => {
            const product = state.products.find(product => product.id === action.payload)
            product.isDisposed = !product.isDisposed
        }

    }
})
export const {addProduct, deleteProduct, changeStatusProduct, editProduct} = productsSlice.actions

export default productsSlice.reducer