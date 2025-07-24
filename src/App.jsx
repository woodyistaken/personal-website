import { useEffect } from 'react'
import Header from './components/Header'
import Top from './components/Top'
import Main from './components/Main'

function App() {
  useEffect(()=>{
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    })
  return (
    <>
      <Header/>
      <Top/>
      <Main/>
    </>
  )
}

export default App
