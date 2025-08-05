import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../api/orderApi";

function OrderConfirm() {
  const [order, setOrder] = useState(null);
  const [form, setForm] = useState({ customerName: "", mobile: "", address: "" });
  const navigate = useNavigate();

  // Load order from localStorage
  useEffect(() => {
    const pendingOrder = localStorage.getItem("pendingOrder");
    if (pendingOrder) {
      setOrder(JSON.parse(pendingOrder));
    } else {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleConfirm = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate("/login");
        return;
      }

      const orderData = {
        ...order,
        userId: user.id,
        customerName: form.customerName,
        mobile: form.mobile,
        address: form.address,
      };

      await addOrder(orderData);

      alert("✅ Order placed successfully!");
      localStorage.removeItem("pendingOrder");
      navigate("/home");
    } catch (err) {
      console.error("Order error:", err.response?.data || err.message);
      alert("❌ Failed to place order.");
    }
  };

  if (!order) return null;

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", margin: "auto" }}>
        <h3 className="fw-bold mb-3">Confirm Your Order</h3>

        <p><strong>Dish:</strong> {order.dishName}</p>
        <p><strong>Price:</strong> ₹{order.price}</p>
        <p><strong>Quantity:</strong> {order.quantity}</p>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
          name="customerName"
          value={form.customerName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Mobile Number"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          placeholder="Delivery Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <button className="btn btn-success w-100" onClick={handleConfirm}>
          ✅ Place Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirm;
