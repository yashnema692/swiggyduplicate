import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { adminSignup } from "../api/authApi";

function AdminSignup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Admin Signup</h3>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
        <input type="email" className="form-control mb-2" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
        <input type="password" className="form-control mb-2" placeholder="Password" name="password" value={form.password} onChange={handleChange} required autoComplete="new-password" />
        <button className="btn btn-success w-100">Signup</button>
      </form>
      <p className="mt-2">
        Already an Admin? <Link to="/admin/login">Login</Link>
      </p>
    </div>
  );
}

export default AdminSignup;
