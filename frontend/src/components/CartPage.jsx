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

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-3">My Cart / Orders</h3>
      <div className="card shadow-sm">
        <div className="card-body">
          {orders.length === 0 ? (
            <p className="text-muted text-center">No orders yet</p>
          ) : (
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Dish</th>
                  <th>Cuisine</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.dishName}</td>
                    <td>{order.cuisine}</td>
                    <td>{order.quantity}</td>
                    <td>₹{order.price}</td>
                    <td>
                      <span
                        className={
                          order.status === "delivered"
                            ? "text-success fw-bold"
                            : order.status === "pending"
                            ? "text-warning fw-bold"
                            : "text-primary fw-bold"
                        }
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
