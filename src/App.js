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
import NotFound from './components/NotFound/NotFound';
import Places from './components/Places/Places';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (

    // Our App is wrapped with AuthProvider to provide access to the user's authentication state to all of our components.

    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* Nested Private Route */}
          <Route path="/*" element={<PrivateOutlet />} >
            <Route path="places" element={<Places />} />
          </Route>
          {/* Dynamic id to show place details */}
          <Route path="places/:id" element={<Booking />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="addplace" element={<AddPlace />} />
          <Route path="manageorders" element={<ManageOrders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
