import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCuisines } from "../api/cuisineApi";

function DishPage() {
  const { dishId } = useParams();
  const [dish, setDish] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const { data } = await getCuisines();
        let foundDish = null;
        data.forEach((cuisine) => {
          cuisine.dishes?.forEach((d) => {
            if (d._id === dishId) {
              foundDish = { ...d, cuisine: cuisine.name };
            }
          });
        });
        setDish(foundDish);
      } catch (err) {
        console.error("Error fetching dish:", err);
      }
    };
    fetchDish();
  }, [dishId]);

  const handleOrder = () => {
    const pendingOrder = {
      dishId: dish._id,
      dishName: dish.name,
      price: dish.price,
      quantity: 1,
      cuisine: dish.cuisine,
    };
    localStorage.setItem("pendingOrder", JSON.stringify(pendingOrder));
    navigate("/order-confirm");
  };

  // ✅ Dynamic Rating
  const getRating = (dish) => {
    return dish.rating || (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  };

  // ✅ Tagline based on cuisine
  const getTagline = (dish) => {
    const cuisine = dish.cuisine.toLowerCase();
    if (cuisine.includes("italian"))
      return "🍝 Authentic Italian flavors, fresh & classic.";
    if (cuisine.includes("indian"))
      return "🌶️ Spicy Indian taste, full of aroma.";
    if (cuisine.includes("chinese"))
      return "🥢 Traditional Chinese delight, wok fresh.";
    if (cuisine.includes("mexican"))
      return "🌮 Zesty Mexican spices, bold & vibrant.";
    return "🍽️ Delicious taste you’ll love!";
  };

  if (!dish) return <p className="text-center mt-5">Loading dish details...</p>;

  return (
    <div className="dish-page">
      {/* ✅ Hero Section */}
      <div className="dish-hero">
        <img
          src={dish.image || "https://via.placeholder.com/800x400"}
          alt={dish.name}
          className="hero-img"
        />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{dish.name}</h1>
          <p>{dish.cuisine} Cuisine</p>
        </div>
      </div>

      {/* ✅ Dish Details */}
      <div className="container py-4">
        <div className="dish-detail card shadow-sm border-0 rounded-3 p-4">
          <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
            <img
              src={dish.image || "https://via.placeholder.com/300"}
              alt={dish.name}
              className="dish-img"
            />
            <div className="dish-info flex-grow-1">
              <h2 className="fw-bold">{dish.name}</h2>
              <p className="text-muted">{dish.description || "Delicious food you'll love"}</p>

              {/* ✅ Dynamic Rating */}
              <div className="d-flex align-items-center gap-3 mb-2">
                <span className="badge bg-success fs-6">⭐ {getRating(dish)}</span>
                <span className="text-muted">100+ reviews</span>
              </div>

              {/* ✅ Static line based on cuisine */}
              <p className="tagline fw-semibold">{getTagline(dish)}</p>

              <h4 className="text-success mt-3">₹{dish.price}</h4>

              <button className="btn btn-primary btn-lg mt-3" onClick={handleOrder}>
                🛒 Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CSS */}
      <style jsx>{`
        .dish-hero {
          position: relative;
          height: 320px;
          overflow: hidden;
          border-radius: 0 0 20px 20px;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.4);
        }
        .hero-text {
          position: absolute;
          bottom: 20px;
          left: 30px;
          color: #fff;
        }
        .hero-text h1 {
          font-size: 2.2rem;
          font-weight: 800;
        }
        .dish-img {
          width: 220px;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
        }
        .tagline {
          font-size: 1rem;
          color: #444;
        }
      `}</style>
    </div>
  );
}

export default DishPage;
