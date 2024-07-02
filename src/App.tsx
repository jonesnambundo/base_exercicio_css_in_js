import React from 'react'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle from './global'
import Header from './containers/Header'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
