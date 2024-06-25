import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage';
import ProductDetails from './components/productDetails';



function App() {
  return (
    <Router>
    {/* Navbar starts here */}
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>ShopYangu<i class="fa-solid fa-cart-shopping"></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu bg-success">
                  <li><a className="dropdown-item" href="#">Accessories</a></li>
                  <li><a className="dropdown-item" href="#">Phones</a></li>
                  <li><a className="dropdown-item" href="#">TVs</a></li>
                  <li><a className="dropdown-item" href="#">Laptops</a></li>
                  <li><a className="dropdown-item" href="#">Clothes</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">My Account</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Navbar ends here */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='products/:productId' element={<ProductDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
