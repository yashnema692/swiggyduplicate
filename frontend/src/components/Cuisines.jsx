import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCuisines } from "../api/cuisineApi"; // ✅ fetch from backend

const Cuisines = () => {
  const carouselRef = useRef(null);
  const [cuisines, setCuisines] = useState([]);

  // Fetch cuisines from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCuisines();
        setCuisines(data);
      } catch (err) {
        console.error("Error fetching cuisines:", err);
      }
    };
    fetchData();
  }, []);

  // Handle carousel width
  useEffect(() => {
    const updateMaxScroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }
    };
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  return (
    <section className="cuisine-section">
      <div className="section-header">
        <h2 className="section-title">Popular Cuisines</h2>
        <a href="#" className="view-all">View All ➝</a>
      </div>

      <div className="carousel-container">
        <div className="cuisine-carousel" ref={carouselRef}>
          {cuisines.map((cuisine) => (
            <Link 
              to={`/cuisine/${cuisine.name.toLowerCase()}`} 
              key={cuisine._id} 
              className="cuisine-card"
            >
              <div className="card-image-container">
                <img 
                  src={cuisine.image || "https://via.placeholder.com/200"} 
                  className="card-image" 
                  alt={cuisine.name} 
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{cuisine.name}</h3>
                <p className="card-count">{cuisine.description || "Tasty cuisine"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cuisine-section { padding: 20px 0; background: #fafafa; }
        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 0 20px; }
        .section-title { font-size: 1.8rem; font-weight: 700; color: #222; }
        .view-all { color: #ff5a1f; font-weight: 600; text-decoration: none; font-size: 0.95rem; }
        .cuisine-carousel { display: flex; gap: 20px; overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; padding: 10px 20px; }
        .cuisine-carousel::-webkit-scrollbar { display: none; }
        .cuisine-card { flex: 0 0 220px; background: white; border-radius: 16px; box-shadow: 0 6px 18px rgba(0,0,0,0.08); text-decoration: none; color: inherit; transition: transform 0.3s ease; }
        .cuisine-card:hover { transform: translateY(-5px); }
        .card-image-container { width: 100%; height: 160px; overflow: hidden; border-top-left-radius: 16px; border-top-right-radius: 16px; }
        .card-image { width: 100%; height: 100%; object-fit: cover; }
        .card-content { padding: 15px; text-align: center; }
        .card-title { font-size: 1.1rem; font-weight: 700; }
        .card-count { font-size: 0.9rem; color: #777; }
        @media (max-width: 768px) { .cuisine-card { flex: 0 0 160px; } .card-image-container { height: 120px; } }
      `}</style>
    </section>
  );
};

export default Cuisines;
