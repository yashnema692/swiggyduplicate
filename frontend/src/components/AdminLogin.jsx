import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { adminLogin } from "../api/authApi";

function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Admin Login</h3>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" className="form-control mb-2" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
        <input type="password" className="form-control mb-2" placeholder="Password" name="password" value={form.password} onChange={handleChange} required autoComplete="current-password" />
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-2">
        New Admin? <Link to="/admin/signup">Register</Link>
      </p>
    </div>
  );
}

export default AdminLogin;
