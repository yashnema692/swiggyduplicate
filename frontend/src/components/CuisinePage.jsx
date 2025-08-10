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
      <div
        className="cuisine-hero"
        style={{
          backgroundImage: `url(${
            cuisine?.image || "https://via.placeholder.com/1200x400"
          })`,
        }}
      >
        <div className="overlay">
          <h1>{cuisineName} Cuisine</h1>
          <p>Explore top dishes and restaurants 🍽️</p>
        </div>
      </div>

      <div className="container py-5">
        {cuisine ? (
          <>
            {/* ✅ Cuisine Info */}
            <div className="cuisine-info-card shadow-sm mb-5">
              <h2 className="fw-bold mb-2">{cuisine.name}</h2>
              <p className="text-muted">{cuisine.description}</p>
              <div className="extra-info mt-3">
                <span className="badge bg-warning text-dark"> Popular</span>
                <span className="badge bg-secondary"> Trending</span>
                <span className="badge bg-primary">⏱ 20-30 min</span>
              </div>
            </div>

            {/* ✅ Dishes Section */}
            <h3 className="fw-bold mb-4">🍴 Popular Dishes</h3>
            <div className="row">
              {cuisine.dishes && cuisine.dishes.length > 0 ? (
                cuisine.dishes.map((dish) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={dish._id}>
                    <Link
                      to={`/dish/${dish._id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="dish-card shadow-sm">
                        <div className="dish-img">
                          <img
                            src={
                              dish.image || "https://via.placeholder.com/400"
                            }
                            alt={dish.name}
                          />
                        </div>
                        <div className="dish-body">
                          <h5 className="fw-bold">{dish.name}</h5>
                          <p className="dish-desc text-muted small">
                            {dish.description || "Freshly prepared & tasty"}
                          </p>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            <span className="dish-price">
                              ₹{dish.price || "—"}
                            </span>
                            <span className="rating">⭐ 4.{Math.floor(Math.random() * 5)}</span>
                          </div>
                          <p className="delivery-time text-muted small mt-1">
                             Delivery in 30 mins
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">
                  No dishes added yet for {cuisineName}.
                </p>
              )}
            </div>
          </>
        ) : (
          <p className="text-center text-muted">
            No details found for {cuisineName} cuisine.
          </p>
        )}
      </div>

      {/* ✅ CSS */}
      <style jsx>{`
        body {
          background: #f9fafb;
          font-family: "Inter", sans-serif;
        }
        .cuisine-hero {
          height: 280px;
          background-size: cover;
          background-position: center;
          border-radius: 0 0 25px 25px;
          position: relative;
        }
        .cuisine-hero .overlay {
          background: rgba(44, 62, 80, 0.55);
          color: white;
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .cuisine-hero h1 {
          font-size: 2.5rem;
          font-weight: 800;
        }
        .cuisine-info-card {
          background: #fff;
          border-radius: 16px;
          padding: 25px;
        }
        .extra-info span {
          margin-right: 10px;
          font-size: 0.9rem;
        }
        .dish-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .dish-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        .dish-img img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-bottom: 1px solid #eee;
        }
        .dish-body {
          padding: 15px;
        }
        .dish-price {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ff4c29;
        }
        .rating {
          color: #000201ff;
          font-weight: 500;
        }
        .delivery-time {
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
};

export default CuisinePage;
