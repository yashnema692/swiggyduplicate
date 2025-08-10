import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { adminLogin } from "../api/authApi";

function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await adminLogin(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(180deg, #1e3c72, #2a5298)", // ✅ professional theme
      }}
    >
      <div className="card shadow-lg border-0 p-4" style={{ width: "380px" }}>
        <h3 className="text-center fw-bold mb-3" style={{ color: "#1e3c72" }}>
          Admin Login
        </h3>
        <p className="text-center text-muted mb-4">
          Please enter your credentials
        </p>

        {error && (
          <div className="alert alert-danger py-2 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>

          <button className="btn w-100 fw-bold text-white" style={{ background: "#1e3c72" }}>
            Login
          </button>
        </form>

        <p className="mt-3 text-center text-muted">
          New Admin?{" "}
          <Link to="/admin/signup" className="fw-semibold" style={{ color: "#2a5298" }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
