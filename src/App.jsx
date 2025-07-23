import { useState } from 'react'
import Header from './components/header'
import Top from './components/top'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Top/>
    </>
  )
}

export default App
