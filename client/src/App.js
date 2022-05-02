import { Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import ProductsListing from './routes/products-listing/products-listing.components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='products' element={<ProductsListing />}/>
      </Route>
    </Routes>
  );
}

export default App;
