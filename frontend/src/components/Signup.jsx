import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../api/authApi";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "#fff",
      }}
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

        {/* Logo / Brand */}
        <div className="text-center mb-3 mt-3">
          <h2 style={{ color: "#F32852", fontWeight: "bold" }}>Foodline</h2>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Create your account and start ordering 🍔🍕
          </p>
        </div>

        {/* Error */}
        {error && (
          <p
            className="text-center"
            style={{
              color: "red",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

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
            className="form-control mb-3"
            placeholder="Mobile Number"
            name="mobile"
            value={form.mobile}
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
            autoComplete="new-password"
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
            Signup
          </button>
        </form>

        {/* Login redirect */}
        <p className="text-center mt-3" style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#F32852", fontWeight: "600" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
