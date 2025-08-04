import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [adminName, setAdminName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = localStorage.getItem("admin");
    if (adminData) {
      const admin = JSON.parse(adminData);
      setAdminName(admin.name); // ✅ get name from stored object
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="admin-layout d-flex">
      {/* Sidebar */}
      <aside className={`sidebar bg-dark text-white p-3 ${collapsed ? "collapsed" : ""}`}>
        <h3 className="fw-bold mb-4">Admin Panel</h3>
        <nav className="nav flex-column">
          <Link className="nav-link text-white" to="/admin"> Dashboard</Link>
          <Link className="nav-link text-white" to="/admin/users"> Manage Users</Link>
          <Link className="nav-link text-white" to="/admin/orders"> Manage Orders</Link>
          <Link className="nav-link text-white" to="/admin/restaurants"> Manage Restaurants</Link>
          <Link className="nav-link text-white" to="/admin/cuisines"> Manage Cuisines</Link>

        </nav>
        <button className="btn btn-danger mt-4 w-100" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        {/* Navbar */}
        <header className="admin-navbar bg-light shadow-sm d-flex justify-content-between align-items-center px-4 py-3">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "➡ Expand" : "⬅ Collapse"}
          </button>

          {/* ✅ Dynamic admin name here */}
          <h5 className="m-0">Welcome, {adminName || "Admin"} 👋</h5>
        </header>

        <main className="p-4">
          <Outlet />
        </main>
      </div>

      <style jsx>{`
        .admin-layout {
          height: 100vh;
        }
        .sidebar {
          width: 250px;
          transition: width 0.3s;
        }
        .sidebar.collapsed {
          width: 80px;
        }
        .nav-link {
          margin-bottom: 10px;
          font-weight: 500;
        }
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}

export default AdminLayout;
