import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { adminSignup } from "../api/authApi";

function AdminSignup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminSignup(form);
      navigate("/admin/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(180deg, #1e3c72, #2a5298)", // ✅ same theme as login
      }}
    >
      <div className="card shadow-lg border-0 p-4" style={{ width: "380px" }}>
        <h3 className="text-center fw-bold mb-3" style={{ color: "#1e3c72" }}>
          Admin Signup
        </h3>
        <p className="text-center text-muted mb-4">
          Create your admin account
        </p>

        {error && (
          <div className="alert alert-danger py-2 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

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
              placeholder="Create password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>

          <button className="btn w-100 fw-bold text-white" style={{ background: "#2a5298" }}>
            Signup
          </button>
        </form>

        <p className="mt-3 text-center text-muted">
          Already an Admin?{" "}
          <Link to="/admin/login" className="fw-semibold" style={{ color: "#2a5298" }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminSignup;
