import React, { useEffect, useState } from 'react';
import './App.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";


import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />

        {/* 🔥 Products from Firebase */}
        <div style={{ padding: "20px" }}>
          <h1>Our Products</h1>
          {products.map(p => (
            <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
              <h2>{p.name}</h2>
              <p>Price: ₹{p.price}</p>
              <p>{p.description}</p>
            </div>
          ))}
        </div>

        <Products />
        <HowItWorks />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App; 
