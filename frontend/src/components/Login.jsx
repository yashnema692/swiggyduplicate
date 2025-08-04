import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/authApi";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home"); // ✅ redirect to home after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ background: "#fff" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "400px",
          borderRadius: "15px",
          border: "none",
          position: "relative",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#F32852",
          }}
        >
          ←
        </button>

        {/* Brand Logo */}
        <div className="text-center mb-3 mt-3">
          <h2 style={{ color: "#F32852", fontWeight: "bold" }}>Foodline</h2>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Login to continue ordering delicious food 🍔🍕
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-center text-danger mb-2" style={{ fontSize: "14px" }}>
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email address"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <button
            className="btn w-100"
            style={{
              backgroundColor: "#F32852",
              color: "white",
              fontWeight: "600",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Login
          </button>
        </form>

        {/* Signup redirect */}
        <p className="text-center mt-3" style={{ fontSize: "14px" }}>
          New to Foodline?{" "}
          <Link to="/signup" style={{ color: "#F32852", fontWeight: "600" }}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
