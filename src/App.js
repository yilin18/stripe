import { Routes, Route } from 'react-router-dom'
import Home from './router/home/home.component.jsx';
import Navigation from './router/navigation/navigation.component.jsx';
import SignIn from './router/sign-in/sign-in.component.jsx';
import { useEffect } from 'react';

const Shop = ()=>{

  useEffect(() => {
    if (window.FB) {
        window.FB.XFBML.parse();
    }
  },[]);

  return(
    
    <div className="facebookComment">
      <div
          className="fb-comments"
          data-href={window.location.href}
          data-width="100%"
          data-numposts="5"
      ></div>
    </div>
  )
}

function App() {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path = 'shop' element={<Shop />} />
        <Route path = 'sign-in' element={<SignIn />} />
      </Route>
    </Routes>  
    // <Home/>
  );
}

export default App;
