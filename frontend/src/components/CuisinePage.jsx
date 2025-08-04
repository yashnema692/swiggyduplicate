import React from "react";
import { useParams } from "react-router-dom";

const CuisinePage = () => {
  const { cuisineName } = useParams();

  // ✅ Example restaurant data (replace with API/MongoDB later)
  const restaurants = [
    {
      id: 1,
      name: "Dragon Palace",
      cuisine: "Chinese",
      rating: 4.5,
      deliveryTime: "30 mins",
      price: "₹250 for one",
      image:
        "https://images.unsplash.com/photo-1606788075761-1149e9c0f2fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Bombay Spice",
      cuisine: "Indian",
      rating: 4.7,
      deliveryTime: "25 mins",
      price: "₹200 for one",
      image:
        "https://images.unsplash.com/photo-1604908177522-bb7e2749e508?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Sakura Sushi",
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "40 mins",
      price: "₹350 for one",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Mamma Mia Pizzeria",
      cuisine: "Italian",
      rating: 4.6,
      deliveryTime: "35 mins",
      price: "₹300 for one",
      image:
        "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // Filter restaurants by cuisine (case-insensitive)
  const filteredRestaurants = restaurants.filter(
    (r) => r.cuisine.toLowerCase() === cuisineName.toLowerCase()
  );

  return (
    <div className="cuisine-page">
      {/* ✅ Hero Section */}
      <div className="cuisine-hero">
        <h1>{cuisineName} Cuisine</h1>
        <p>Explore top restaurants serving delicious {cuisineName} dishes 🍽️</p>
      </div>

      {/* ✅ Restaurant Listing */}
      <div className="container py-4">
        {filteredRestaurants.length > 0 ? (
          <div className="restaurant-grid">
            {filteredRestaurants.map((r) => (
              <div key={r.id} className="restaurant-card">
                <div className="card-img">
                  <img src={r.image} alt={r.name} />
                </div>
                <div className="card-body">
                  <h3 className="restaurant-name">{r.name}</h3>
                  <p className="restaurant-meta">
                    ⭐ {r.rating} • {r.deliveryTime}
                  </p>
                  <p className="restaurant-price">{r.price}</p>
                  <button className="btn-order">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">
            No restaurants found for {cuisineName} cuisine.
          </p>
        )}
      </div>

      {/* ✅ CSS */}
      <style jsx>{`
        .cuisine-hero {
          background: linear-gradient(135deg, #ff0100, #ff5a5f);
          color: white;
          text-align: center;
          padding: 60px 20px;
          border-radius: 0 0 25px 25px;
        }

        .cuisine-hero h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .cuisine-hero p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .restaurant-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .restaurant-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .restaurant-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .card-img {
          height: 180px;
          overflow: hidden;
        }

        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .restaurant-card:hover .card-img img {
          transform: scale(1.05);
        }

        .card-body {
          padding: 16px;
        }

        .restaurant-name {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .restaurant-meta {
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 6px;
        }

        .restaurant-price {
          font-weight: 600;
          margin-bottom: 12px;
        }

        .btn-order {
          background: #ff0100;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-order:hover {
          background: #d60000;
        }

        @media (max-width: 768px) {
          .cuisine-hero h1 {
            font-size: 1.8rem;
          }

          .cuisine-hero p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CuisinePage;
