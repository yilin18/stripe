import { Routes, Route } from 'react-router-dom'
import Home from './router/home/home.component.jsx';
import Navigation from './router/navigation/navigation.component.jsx';

const Shop = ()=>{
  return(
    <div>
      I am Shop Page.
    </div>
  )
}

function App() {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path = 'shop' element={<Shop />} />
      </Route>
    </Routes>  
    // <Home/>
  );
}

export default App;
