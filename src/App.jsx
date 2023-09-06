import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Nav/Navbar'
import Inicio from './components/Home/Inicio'
import Footer from './components/Footer'
import Art from './components/Gallery/Art';
import Aside from './components/Aside';
import Exposition from './components/Gallery/Exposition';
import WorkContextProvider from './context/WorkContext';
import { useWorkContext } from './context/WorkContext';

function App() {
  
  const {works, getWorks, scrollToTop} = useWorkContext()

  return (
    <WorkContextProvider value={{works, getWorks, scrollToTop}}>
    <Router>
        <Navbar/>
        <Aside/>
        <Routes>
          <Route index element={<Inicio/>} />
          <Route path='/:name' element={<Art/>} />
          <Route path='/gallery' element={<Exposition/>} />
        </Routes>
        <Footer/>
    </Router>
    </WorkContextProvider>
  )
}

export default App;