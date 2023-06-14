import './App.css';
import Preloader from './Pages/Preloader';
import Products from './Pages/Products';
import Single from './Pages/Single';


import { useState } from 'react';


function App() {
  const [loading, setloading] = useState(true)
  setTimeout(() => {
    setloading(false)
  }, 3000);
  return (
    <>

      {
        loading ? <Preloader /> : (
          <div>
            <Single />
            <Products />
            <Footer />
          </div>
        )
      }
    </>
  );
}

export default App;
