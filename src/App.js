import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Cart, Checkout, Error, Home, Products } from './pages';
import { Footer, Navabar, Sidebar } from './component';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navabar />
        <Sidebar />
      <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
