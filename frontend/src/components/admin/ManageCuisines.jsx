import { useEffect, useState } from "react";
import {
  getCuisines,
  addCuisine,
  updateCuisine,
  deleteCuisine,
} from "../../api/cuisineApi";

function ManageCuisines() {
  const [cuisines, setCuisines] = useState([]);
  const [form, setForm] = useState({ name: "", image: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchCuisines = async () => {
    try {
      const { data } = await getCuisines();
      setCuisines(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCuisines();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateCuisine(editingId, form);
      } else {
        await addCuisine(form);
      }
      setForm({ name: "", image: "", description: "" });
      setEditingId(null);
      fetchCuisines();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (cuisine) => {
    setForm({
      name: cuisine.name,
      image: cuisine.image,
      description: cuisine.description,
    });
    setEditingId(cuisine._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this cuisine?")) {
      await deleteCuisine(id);
      fetchCuisines();
    }
  };

  return (
    <div className="manage-cuisines">
      <h2 className="title">🍴 Manage Cuisines</h2>

      {/* Form */}
      <div className="form-card">
        <h4>{editingId ? "✏️ Edit Cuisine" : "➕ Add New Cuisine"}</h4>
        <form onSubmit={handleSubmit} className="cuisine-form">
          <input
            type="text"
            placeholder="Cuisine Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button type="submit" className="btn-primary">
            {editingId ? "Update" : "Add"} Cuisine
          </button>
          {editingId && (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setEditingId(null);
                setForm({ name: "", image: "", description: "" });
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Cuisine List */}
      <div className="table-container">
        <table className="cuisine-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th style={{ width: "160px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cuisines.map((cuisine) => (
              <tr key={cuisine._id}>
                <td>{cuisine.name}</td>
                <td>
                  {cuisine.image && (
                    <img
                      src={cuisine.image}
                      alt={cuisine.name}
                      width="60"
                      style={{ borderRadius: "6px" }}
                    />
                  )}
                </td>
                <td>{cuisine.description}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(cuisine)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(cuisine._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {cuisines.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#888" }}>
                  No cuisines found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Styles */}
      <style jsx>{`
        .manage-cuisines {
          padding: 20px;
        }
        .title {
          margin-bottom: 20px;
        }
        .form-card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          margin-bottom: 30px;
        }
        .cuisine-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        input,
        textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }
        textarea {
          resize: none;
          min-height: 60px;
        }
        .btn-primary {
          background: #ff5a1f;
          color: white;
          border: none;
          padding: 10px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.2s;
        }
        .btn-primary:hover {
          background: #e14d18;
        }
        .btn-secondary {
          background: #ccc;
          color: black;
          border: none;
          padding: 10px 14px;
          border-radius: 6px;
          margin-left: 10px;
          cursor: pointer;
        }
        .table-container {
          overflow-x: auto;
        }
        .cuisine-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        .cuisine-table th,
        .cuisine-table td {
          border: 1px solid #eee;
          padding: 12px;
          text-align: left;
        }
        .cuisine-table th {
          background: #f7f7f7;
          font-weight: 600;
        }
        .btn-edit {
          background: #3498db;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          margin-right: 8px;
          cursor: pointer;
        }
        .btn-delete {
          background: #e74c3c;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
        }
        .btn-edit:hover {
          background: #2d83c4;
        }
        .btn-delete:hover {
          background: #c0392b;
        }
      `}</style>
    </div>
  );
}

export default ManageCuisines;
