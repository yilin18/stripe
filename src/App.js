import { Routes, Route } from 'react-router-dom'
import Home from './router/home/home.component.jsx';
import Navigation from './router/navigation/navigation.component.jsx';
import Authentication from './router/authentication/authentication.component.jsx';
// import { useEffect } from 'react';
import Shop from './router/shop/shop.component.jsx'
import Checkout from './router/checkout/checkout.component.jsx';



function App() {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path = 'shop/*' element={<Shop />} />
        <Route path = 'auth' element={<Authentication />} />
        <Route path = 'checkout' element={<Checkout />} />      
      </Route>
    </Routes>  
    // <Home/>
  );
}

export default App;
