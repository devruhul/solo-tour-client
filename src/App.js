import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddPlace from './components/AddPlace/AddPlace';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import Places from './components/Places/Places';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="places" element={<Places />} />
        <Route path="places/:id" element={<Booking />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="myorders" element={<MyOrders />} />
        <Route path="addplace" element={<AddPlace />} />
        <Route path="manageorders" element={<ManageOrders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
