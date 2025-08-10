import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/authApi";
import { getOrders } from "../../api/orderApi";
import { getCuisines } from "../../api/cuisineApi";

function DashboardHome() {
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);
  const [statusSummary, setStatusSummary] = useState({
    Pending: 0,
    Confirmed: 0,
    Delivered: 0,
    Cancelled: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Users
      const usersRes = await getAllUsers();
      setUserCount(usersRes.data.length);

      // Orders
      const ordersRes = await getOrders();
      const orders = ordersRes.data || [];
      setOrderCount(orders.length);

      // Order status summary
      const summary = { Pending: 0, Confirmed: 0, Delivered: 0, Cancelled: 0 };
      orders.forEach((o) => {
        if (summary[o.status] !== undefined) {
          summary[o.status]++;
        }
      });
      setStatusSummary(summary);

      // Get 5 latest orders (sorted by createdAt)
      const sorted = [...orders].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setRecentOrders(sorted.slice(0, 5));

      // Restaurants (using cuisines count for now)
      const cuisinesRes = await getCuisines();
      setRestaurantCount(cuisinesRes.data.length);
    } catch (err) {
      console.error("Error fetching dashboard stats:", err);
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
      <h2 className="fw-bold">Dashboard Overview</h2>
      <p className="text-muted">
        Quick snapshot of users, orders, and restaurants.
      </p>

      {/* Summary Cards */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm text-center border-0">
            <h5 className="fw-semibold text-muted">Total Users</h5>
            <p className="fs-2 fw-bold text-primary">{userCount}</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow-sm text-center border-0">
            <h5 className="fw-semibold text-muted">Total Orders</h5>
            <p className="fs-2 fw-bold text-success">{orderCount}</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow-sm text-center border-0">
            <h5 className="fw-semibold text-muted">Restaurants</h5>
            <p className="fs-2 fw-bold text-danger">{restaurantCount}</p>
          </div>
        </div>
      </div>

      {/* Order Status Summary */}
      <div className="row mt-4">
        {Object.keys(statusSummary).map((status) => (
          <div key={status} className="col-md-3">
            <div className="card shadow-sm border-0 text-center p-3">
              <h6 className="fw-semibold">{status}</h6>
              <p className="fs-4 fw-bold">
                {statusSummary[status] || 0}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="card mt-4 shadow-sm border-0">
        <div className="card-header fw-semibold bg-light">
          🆕 Recent Orders
        </div>
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Dish</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.length > 0 ? (
                recentOrders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.dishName}</td>
                    <td>
                      {order.customerName} <br />
                      <small className="text-muted">{order.mobile}</small>
                    </td>
                    <td>
                      <span className="badge bg-secondary">{order.status}</span>
                    </td>
                    <td>{formatDate(order.createdAt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No recent orders
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
