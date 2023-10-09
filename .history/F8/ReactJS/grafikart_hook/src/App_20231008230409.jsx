import { useState } from 'react'
import './App.css'
import Increment from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Increment/>
    </>
  )
}

export default App
