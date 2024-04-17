import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {

  const [ cambioPag, setCambioPag] = useState(false)
  const cambiarPag = () => setCambioPag(!cambioPag)

  return (
    <div className='App'>
      <Header texto="ZAMBRANO BICICLETAS"/>
      {cambioPag
        ? (
          <ProductPage/>
        )
        : (
          <HomePage/>
        )
      }
      <Footer cambiarPag={cambiarPag}/>
    </div>
  )
}

export default App
