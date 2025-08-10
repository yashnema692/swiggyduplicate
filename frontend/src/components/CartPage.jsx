import { useEffect, useState } from "react";
import { getUserOrders } from "../api/orderApi";

function CartPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await getUserOrders();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
    fetchOrders();
  }, []);

  // format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-4">🛒 My Cart / Orders</h3>

      {orders.length === 0 ? (
        <p className="text-muted text-center">No orders yet</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order._id} className="card mb-3 shadow-sm border-0 rounded-3 order-card">
              <div className="row g-0">
                

                {/* ✅ Order Details */}
                <div className="col-md-9">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0">{order.dishName}</h5>
                      <span
                        className={`badge fs-6 px-3 py-2 ${
                          order.status === "Delivered"
                            ? "bg-success"
                            : order.status === "Pending"
                            ? "bg-warning text-dark"
                            : order.status === "Cancelled"
                            ? "bg-danger"
                            : "bg-primary"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-muted mb-1">Cuisine: {order.cuisine}</p>
                    <p className="mb-1">
                      Qty: <strong>{order.quantity}</strong> × ₹{order.price} ={" "}
                      <strong>₹{order.price * order.quantity}</strong>
                    </p>

                    {/* ✅ Customer Info */}
                    {order.customerName && (
                      <p className="mb-1">
                        👤 {order.customerName} | 📞 {order.mobile}
                      </p>
                    )}
                    {order.address && (
                      <p className="text-muted small mb-2">📍 {order.address}</p>
                    )}

                    {/* ✅ Order Dates */}
                    <div className="d-flex justify-content-between text-muted small">
                      <span>Ordered: {formatDate(order.createdAt)}</span>
                      <span>Updated: {formatDate(order.updatedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ CSS */}
      <style jsx>{`
        .order-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .order-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </div>
  );
}

export default CartPage;
