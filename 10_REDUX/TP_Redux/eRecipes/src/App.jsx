

import './App.css'
import SignForm from './components/auth/SignForm'
import NavBar from './components/shared/Navbar'
import RecipeList from './components/recipes/RecipeList'



function App() {
 
  return (
    <>
    <NavBar />
      
          
    <SignForm/>
    <RecipeList/>
    </>
  )
}

export default App