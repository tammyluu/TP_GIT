import {createSlice} from '@reduxjs/toolkit'

const productsSlice = createSlice({ 
    name: 'product',
    initialState: {
        products :[
           /*  {id : 1,  title: "Pomme", price : "1.5€", isDisposed :false},
            {id : 2,  title : "Poire", price : "1€", isDisposed :true}, */
        ],
            
    
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
           
         },
        deleteProduct: (state, action) => {  
            state.products = state.products.filter(product => product.id!== action.payload)
            alert("Voulez vous supprimer ce produit?")
         }  ,
        
         editProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload)
           if (index!== -1) {
            state.products[index] = action.payload
           }
         },
        changeStatusProduct: (state, action) => {
            const product = state.products.find(product => product.id === action.payload)
            product.isDisposed = !product.isDisposed
        }

    }
})
export const {addProduct, deleteProduct, changeStatusProduct, editProduct} = productsSlice.actions

export default productsSlice.reducer