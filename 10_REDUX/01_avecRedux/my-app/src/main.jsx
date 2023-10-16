import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from'react-redux'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* declenche de store
    Le provider  permet de donner l'acces au store au composant App ainsi que les autres composnts enfants
     */}
     <Provider store={store}>
     <App />
     </Provider>
  </React.StrictMode>,
)
