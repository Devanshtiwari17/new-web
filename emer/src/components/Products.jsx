import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

function Products() {
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
    <section style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Our Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <h3>{p.name}</h3>
            <p style={{ fontWeight: "bold" }}>₹{p.price}</p>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
