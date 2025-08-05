import { useEffect, useState } from "react";
import { getOrders, updateOrder, deleteOrder } from "../../api/orderApi";

function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await getOrders();
      setOrders(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateOrder(id, newStatus);
      fetchOrders();
    } catch (err) {
      console.error("Error updating order:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this order?")) return;
    try {
      await deleteOrder(id);
      fetchOrders();
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  // format date in readable form
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div>
      <h2 className="fw-bold">🛒 Manage Orders</h2>
      <p className="text-muted">View, update, and track all customer orders.</p>

      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Dish</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Cuisine</th>
            <th>Customer Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>User (Login)</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Last Updated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order.dishName}</td>
                <td>₹{order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.cuisine}</td>

                {/* Customer entered details */}
                <td>{order.customerName}</td>
                <td>{order.mobile}</td>
                <td>{order.address}</td>

                {/* User from login */}
                <td>
                  {order.userId
                    ? `${order.userId.name} (${order.userId.email})`
                    : "Guest"}
                </td>

                {/* Status */}
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    className="form-select form-select-sm"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>

                {/* Dates */}
                <td>{formatDate(order.createdAt)}</td>
                <td>{formatDate(order.updatedAt)}</td>

                {/* Actions */}
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(order._id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12" className="text-center text-muted">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ManageOrders;
