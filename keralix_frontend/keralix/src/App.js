import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { About, Products, Contact } from "./components/pages/imports";
import Category from './components/pages/Category';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Hero from './components/Hero';
import Seperator from './components/pages/Seperator';

import '@fortawesome/fontawesome-free/css/all.min.css';
import UserLogIn from './components/Accounts/UserLogIn';
import Cart from './components/Cart/Cart';
import OilProducts from './components/Products/OilProducts';
import LotionProducts from './components/Products/LotionProducts';
import CreamProducts from './components/Products/CreamProducts';
import { CartProvider } from './components/Cart/CartContext';
import UserRegister from './components/Accounts/UserRegister';

function App() {
  return (
    <MantineProvider>
      <CartProvider> {/* Wrap the entire Routes in CartProvider */}
        <div className="App">
          {/* Header will always be visible */}
          <Header />

          <Routes>
            {/* Default layout for the homepage */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Seperator />
                  <Category />
                </>
              }
            />

            {/* Account routes */}
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogIn />} />

            {/* Other routes for dynamic page content */}
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/home" element={<Hero />} /> {/* Optional home route */}
            <Route path="/login" element={<UserLogIn />} />
            <Route path='/cart' element={<Cart />} />

            {/* Product routes */}
            <Route path='oilproducts' element={<OilProducts />} />
            <Route path='lotionproducts' element={<LotionProducts />} />
            <Route path='creamproducts' element={<CreamProducts />} />
          </Routes>

          {/* Footer will always be visible */}
          <Footer />
        </div>
      </CartProvider>
    </MantineProvider>
  );
}

export default App;
