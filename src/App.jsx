import { BrowserRouter } from 'react-router-dom'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import './App.css'
import AppRouter from './AppRouter'
import { AuthProvider } from '@/context/AuthContext'

function App() {
  return (
    <AuthProvider>
    	<BrowserRouter>
	      <div className='flex flex-col min-h-screen'>
	        <Header />
	        <main className='flex-auto w-[70vw] mx-auto'>
	          <AppRouter />
	        </main>
	        <Footer />
	      </div>
	    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
