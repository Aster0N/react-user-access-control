import { BrowserRouter } from 'react-router-dom'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import './App.css'
import AppRouter from './AppRouter'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-full'>
        <Header />
        <main className='flex-auto'>
          <div className='min-h-auto'>
            <AppRouter />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
