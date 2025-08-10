import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [adminName, setAdminName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const adminData = localStorage.getItem("admin");
    if (adminData) {
      const admin = JSON.parse(adminData);
      setAdminName(admin.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  // Sidebar links
  const links = [
    { path: "/admin", label: "Dashboard", icon: "bi-speedometer2" },
    { path: "/admin/users", label: "Manage Users", icon: "bi-people" },
    { path: "/admin/orders", label: "Manage Orders", icon: "bi-bag-check" },
    // { path: "/admin/restaurants", label: "Manage Restaurants", icon: "bi-shop" },
    { path: "/admin/cuisines", label: "Manage Cuisines", icon: "bi-egg-fried" },
  ];

  return (
    <div className="admin-layout d-flex">
      {/* Sidebar */}
      <aside
        className={`sidebar text-white d-flex flex-column p-3 ${
          collapsed ? "collapsed" : ""
        }`}
      >
        <h4 className="fw-bold mb-4 text-center">
          {collapsed ? "🍴" : "Food Admin"}
        </h4>

        <nav className="nav flex-column flex-grow-1">
          {links.map((link) => (
            <Link
              key={link.path}
              className={`nav-link d-flex align-items-center text-white mb-2 px-3 py-2 rounded ${
                location.pathname === link.path ? "active" : ""
              }`}
              to={link.path}
            >
              <i className={`bi ${link.icon} me-2`}></i>
              {!collapsed && link.label}
            </Link>
          ))}
        </nav>

        <button
          className="btn btn-outline-light mt-auto w-100"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right me-1"></i>
          {!collapsed && "Logout"}
        </button>
      </aside>

      {/* Main Content */}
      <div className="main-content flex-grow-1 d-flex flex-column">
        {/* Navbar */}
        <header className="admin-navbar shadow-sm d-flex justify-content-between align-items-center px-4 py-3 sticky-top bg-white">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "➡ Expand" : "⬅ Collapse"}
          </button>
          <h5 className="m-0 text-secondary fw-semibold">
            Welcome, <span className="text-dark">{adminName || "Admin"}</span> 👋
          </h5>
        </header>

        {/* Outlet Pages */}
        <main className="p-4 flex-grow-1 bg-light overflow-auto">
          <Outlet />
        </main>
      </div>

      <style jsx>{`
        .admin-layout {
          height: 100vh;
          overflow: hidden;
        }
        .sidebar {
          width: 250px;
         background: linear-gradient(180deg, #1e3c72, #2a5298);

          transition: width 0.3s ease;
          min-height: 100vh;
        }
        .sidebar.collapsed {
          width: 80px;
        }
        .nav-link {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .nav-link:hover,
        .nav-link.active {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: #fff;
        }
        .admin-navbar {
          z-index: 1000;
        }
      `}</style>
    </div>
  );
}

export default AdminLayout;
