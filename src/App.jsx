import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>app</h1>
        <p>nav</p>
        <p>herosection</p>
        <p>aboutsection</p>
        <p>skillssection</p>
    </div>
  )
}

export default App
