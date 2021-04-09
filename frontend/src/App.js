import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  const refreshPage = () => {
    window.location.reload(false);
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <button onClick={refreshPage}><Link to='/'>Home</Link></button>
            </div>
            <div>
                <button className="no-style" onClick={refreshPage}>
                    <Link to='/'>
                        <img src="../images/nombre2.png" alt="product" width="300px" height="40px"></img>
                    </Link>
                </button>
            </div>
            <div className="header-links">
                <Link to="/cart">Cart </Link>
                {userInfo ? (
                    <Link to="/profile">{userInfo.name}</Link>
                ) : (
                    <Link to="/signin">Sign-In</Link>
                )}
                {userInfo && userInfo.isAdmin && (
                    <div class="dropdown">
                        <button class="dropbtn">Admin</button>
                        <div class="dropdown-content">
                            <Link to="/orders">Orders</Link>
                            <Link to="/products">Products</Link>
                        </div>
                    </div>
                )} 
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul className="categories">
                <li>
                <Link to="/category/Farmacologia">Farmacologia</Link>
                </li>
                <li>
                <Link to="/category/EquiposMedicos">Equipos Medicos</Link>
                </li>
                <li>
                <Link to="/category/InsumosMedicos">Insumos Medicos</Link>
                </li>
            </ul>
        </aside>
        <main className="main">
            <br></br>
            <div className="content">
                <Route path ="/orders" component={   OrdersScreen  } />
                <Route path ="/profile" component={   ProfileScreen   } /> 
                <Route path ="/order/:id" component={   OrderScreen   } />
                <Route path ="/products" component={   ProductsScreen   } />
                <Route path ="/shipping" component={   ShippingScreen   } />
                <Route path ="/payment" component={   PaymentScreen   } />
                <Route path ="/placeorder" component={   PlaceOrderScreen   } />
                <Route path ="/signin" component={   SigninScreen   } />
                <Route path ="/register" component={   RegisterScreen   } />
                <Route path ="/product/:id" component={   ProductScreen   } />
                <Route path="/cart/:id?" component={  CartScreen  } />
                <Route path="/category/:id" component={  HomeScreen  } />
                <Route path="/" exact={true} component={  HomeScreen  } />
            </div>
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
