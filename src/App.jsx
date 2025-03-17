
import { Routes,Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import SingleFurniture from './components/Furniture/SingleFurniture'
import Context from './Context/Context'
import CheckOut from './pages/CheckOut'
import { Toaster } from 'react-hot-toast'
import ThankYou from './pages/ThankYou'


function App() {


  return (
    <>
      <Context>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/furniture/:id" element={<SingleFurniture />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/thankyou" element={<ThankYou/>} />
          </Routes>
      
      </Context>
    </>
  );
}

export default App
