import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        <p>
          Explore top dishes and restaurants for {cuisineName} cuisine 🍽️
        </p>
      </div>

      {/* ✅ Cuisine Details */}
      <div className="container py-4">
        {cuisine ? (
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
                {cuisine.description || "Delicious cuisine with popular dishes."}
              </p>
              <button className="btn-order">Order Now</button>
            </div>
          </div>
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
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          max-width: 600px;
          margin: 0 auto;
        }

        .cuisine-detail-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .card-img {
          height: 240px;
          overflow: hidden;
        }

        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .cuisine-detail-card:hover .card-img img {
          transform: scale(1.05);
        }

        .card-body {
          padding: 20px;
          text-align: center;
        }

        .cuisine-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 10px;
        }

        .cuisine-desc {
          font-size: 1rem;
          color: #555;
          margin-bottom: 15px;
        }

        .btn-order {
          background: #ff5a1f;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-order:hover {
          background: #e14d18;
        }

        @media (max-width: 768px) {
          .cuisine-hero h1 {
            font-size: 1.8rem;
          }

          .cuisine-detail-card {
            margin: 0 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default CuisinePage;
