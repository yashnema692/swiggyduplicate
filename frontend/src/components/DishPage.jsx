import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCuisines } from "../api/cuisineApi";
import { addOrder } from "../api/orderApi";

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
  navigate("/order-confirm"); // 👈 Redirect to confirm page
};


  if (!dish) return <p className="text-center mt-5">Loading dish details...</p>;

  return (
    <div className="container py-4">
      <div className="card shadow-lg border-0 rounded-3">
        <img
          src={dish.image || "https://via.placeholder.com/600"}
          alt={dish.name}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="fw-bold">{dish.name}</h2>
          <p className="text-muted">Cuisine: {dish.cuisine}</p>
          <p>{dish.description || "No description available"}</p>
          <h4 className="text-success">₹{dish.price}</h4>
          <button className="btn btn-primary mt-3" onClick={handleOrder}>
            🛒 Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishPage;
