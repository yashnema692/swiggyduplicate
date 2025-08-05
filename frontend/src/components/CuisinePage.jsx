import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCuisines } from "../api/cuisineApi";

const CuisinePage = () => {
  const { cuisineName } = useParams();
  const [cuisine, setCuisine] = useState(null);

  useEffect(() => {
    const fetchCuisine = async () => {
      try {
        const { data } = await getCuisines();
        const found = data.find(
          (c) => c.name.toLowerCase() === cuisineName.toLowerCase()
        );
        setCuisine(found || null);
      } catch (err) {
        console.error("Error fetching cuisine:", err);
      }
    };
    fetchCuisine();
  }, [cuisineName]);

  return (
    <div className="cuisine-page">
      {/* ✅ Hero Section */}
      <div className="cuisine-hero">
        <h1>{cuisineName} Cuisine</h1>
        <p>Explore top dishes and restaurants for {cuisineName} cuisine 🍽️</p>
      </div>

      {/* ✅ Cuisine Details */}
      <div className="container py-4">
        {cuisine ? (
          <>
            <div className="cuisine-detail-card">
              <div className="card-img">
                <img
                  src={cuisine.image || "https://via.placeholder.com/400"}
                  alt={cuisine.name}
                />
              </div>
              <div className="card-body">
                <h3 className="cuisine-name">{cuisine.name}</h3>
                <p className="cuisine-desc">
                  {cuisine.description ||
                    "Delicious cuisine with popular dishes."}
                </p>
              </div>
            </div>

            {/* ✅ Dishes Section */}
            <h2 className="dishes-title">Popular Dishes</h2>
            {cuisine.dishes && cuisine.dishes.length > 0 ? (
              <div className="dish-grid">
                {cuisine.dishes.map((dish) => (
                  <Link
                    key={dish._id}
                    to={`/dish/${dish._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="dish-card">
                      <div className="dish-img">
                        <img
                          src={dish.image || "https://via.placeholder.com/200"}
                          alt={dish.name}
                        />
                      </div>
                      <div className="dish-body">
                        <h4 className="dish-name">{dish.name}</h4>
                        <p className="dish-desc">{dish.description}</p>
                        {dish.price && (
                          <p className="dish-price">₹{dish.price}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted">
                No dishes added yet for {cuisineName}.
              </p>
            )}
          </>
        ) : (
          <p className="text-center text-muted">
            No details found for {cuisineName} cuisine.
          </p>
        )}
      </div>

      {/* ✅ CSS */}
      <style jsx>{`
        .cuisine-hero {
          background: linear-gradient(135deg, #ff5a1f, #ff7f50);
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

        .cuisine-detail-card {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 0 auto 30px;
        }
        .card-img {
          height: 240px;
          overflow: hidden;
        }
        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-body {
          padding: 20px;
          text-align: center;
        }

        .dishes-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 30px 0 15px;
          text-align: center;
        }

        /* ✅ Dishes Grid with Scrollbar */
        .dish-grid {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding: 10px 5px;
          scrollbar-width: thin;
        }
        .dish-grid::-webkit-scrollbar {
          height: 8px;
        }
        .dish-grid::-webkit-scrollbar-thumb {
          background: #ff5a1f;
          border-radius: 10px;
        }

        .dish-card {
          flex: 0 0 220px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .dish-card:hover {
          transform: translateY(-5px);
        }
        .dish-img {
          height: 140px;
          overflow: hidden;
        }
        .dish-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .dish-body {
          padding: 12px;
          text-align: center;
        }
        .dish-name {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .dish-desc {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 8px;
        }
        .dish-price {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ff5a1f;
        }
      `}</style>
    </div>
  );
};

export default CuisinePage;
