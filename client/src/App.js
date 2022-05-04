import { Routes, Route} from 'react-router-dom';

import './App.css';
import Cart from './components/cart/cart.component';
import Register from './components/register/register.component';
import SignIn from './components/signin/signin.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import ProductsListing from './routes/products-listing/products-listing.components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='products' element={<ProductsListing />}/>
        <Route path='signin' element={<SignIn />} />
        <Route path='register' element={<Register />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
