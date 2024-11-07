import { BrowserRouter } from 'react-router-dom'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import './App.css'
import AppRouter from './AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
