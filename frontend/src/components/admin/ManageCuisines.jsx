import { useEffect, useState } from "react";
import {
  getCuisines,
  addCuisine,
  updateCuisine,
  deleteCuisine,
  addDish,
  updateDish,
  deleteDish,
} from "../../api/cuisineApi";

function ManageCuisines() {
  const [cuisines, setCuisines] = useState([]);
  const [form, setForm] = useState({ name: "", image: "", description: "" });
  const [editingCuisine, setEditingCuisine] = useState(null);

  const [dishForm, setDishForm] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });
  const [editingDish, setEditingDish] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const fetchCuisines = async () => {
    const { data } = await getCuisines();
    setCuisines(data);
  };

  useEffect(() => {
    fetchCuisines();
  }, []);

  // ✅ Cuisine Handlers
  const handleSubmitCuisine = async (e) => {
    e.preventDefault();
    if (editingCuisine) {
      await updateCuisine(editingCuisine, form);
    } else {
      await addCuisine(form);
    }
    setForm({ name: "", image: "", description: "" });
    setEditingCuisine(null);
    fetchCuisines();
  };

  const handleEditCuisine = (c) => {
    setForm({ name: c.name, image: c.image, description: c.description });
    setEditingCuisine(c._id);
  };

  const handleDeleteCuisine = async (id) => {
    if (window.confirm("Delete cuisine?")) {
      await deleteCuisine(id);
      fetchCuisines();
    }
  };

  // ✅ Dish Handlers
  const handleSubmitDish = async (e) => {
    e.preventDefault();
    if (editingDish) {
      await updateDish(selectedCuisine, editingDish, dishForm);
    } else {
      await addDish(selectedCuisine, dishForm);
    }
    setDishForm({ name: "", image: "", price: "", description: "" });
    setEditingDish(null);
    setSelectedCuisine(null);
    fetchCuisines();
  };

  const handleEditDish = (cuisineId, dish) => {
    setDishForm({
      name: dish.name,
      image: dish.image,
      price: dish.price,
      description: dish.description,
    });
    setSelectedCuisine(cuisineId);
    setEditingDish(dish._id);
  };

  const handleDeleteDish = async (cuisineId, dishId) => {
    if (window.confirm("Delete dish?")) {
      await deleteDish(cuisineId, dishId);
      fetchCuisines();
    }
  };

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h2
        className="mb-4 text-center fw-bold"
        style={{ color: "#1e3c72" }}
      >
        🍴 Manage Cuisines & Dishes
      </h2>

      {/* Cuisine Form */}
      <div className="card mb-4 shadow-lg border-0 rounded-3">
        <div
          className="card-header text-white fw-semibold"
          style={{
            background: "linear-gradient(90deg,#1e3c72,#2a5298)",
          }}
        >
          {editingCuisine ? "✏ Edit Cuisine" : "➕ Add Cuisine"}
        </div>
        <div className="card-body bg-light">
          <form onSubmit={handleSubmitCuisine} className="row g-3">
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Cuisine Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary px-4 fw-bold">
                {editingCuisine ? "Update" : "Add"} Cuisine
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Cuisine List */}
      <div className="row">
        {cuisines.map((cuisine) => (
          <div className="col-md-6 mb-4" key={cuisine._id}>
            <div className="card shadow-lg border-0 rounded-3 h-100">
              {cuisine.image && (
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "6px 6px 0 0",
                  }}
                />
              )}
              <div className="card-body d-flex flex-column bg-light">
                <h5 className="card-title fw-bold text-dark">
                  {cuisine.name}
                </h5>
                <p className="card-text text-muted small">
                  {cuisine.description}
                </p>

                {/* Cuisine Actions */}
                <div className="mb-2">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEditCuisine(cuisine)}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDeleteCuisine(cuisine._id)}
                  >
                    🗑 Delete
                  </button>
                </div>

                {/* Dishes */}
                <h6 className="mt-3 fw-semibold text-primary">🍽 Dishes</h6>
                <div
                  className="dish-list"
                  style={{
                    maxHeight: "180px",
                    overflowY: "auto",
                    border: "1px solid #e0e0e0",
                    borderRadius: "6px",
                    padding: "6px",
                    background: "#fff",
                  }}
                >
                  {cuisine.dishes?.length ? (
                    cuisine.dishes.map((dish) => (
                      <div
                        key={dish._id}
                        className="d-flex justify-content-between align-items-center border-bottom py-2"
                      >
                        <div className="d-flex align-items-center">
                          {dish.image && (
                            <img
                              src={dish.image}
                              alt={dish.name}
                              style={{
                                width: "35px",
                                height: "35px",
                                objectFit: "cover",
                                borderRadius: "50%",
                                marginRight: "8px",
                              }}
                            />
                          )}
                          <strong>{dish.name}</strong> – ₹{dish.price}
                        </div>
                        <div>
                          <button
                            className="btn btn-sm btn-outline-secondary me-2"
                            onClick={() => handleEditDish(cuisine._id, dish)}
                          >
                            ✏
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                              handleDeleteDish(cuisine._id, dish._id)
                            }
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted small m-2">
                      No dishes added yet.
                    </p>
                  )}
                </div>

                <button
                  className="btn btn-sm btn-success mt-3 align-self-start"
                  onClick={() => setSelectedCuisine(cuisine._id)}
                >
                  ➕ Add Dish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dish Form */}
      {selectedCuisine && (
        <div className="card mt-4 shadow-lg border-0 rounded-3">
          <div
            className="card-header text-white fw-semibold"
            style={{
              background: "linear-gradient(90deg,#1e3c72,#2a5298)",
            }}
          >
            {editingDish ? "✏ Edit Dish" : "➕ Add Dish"}
          </div>
          <div className="card-body bg-light">
            <form onSubmit={handleSubmitDish} className="row g-3">
              <div className="col-md-3">
                <input
                  className="form-control"
                  placeholder="Dish Name"
                  value={dishForm.name}
                  onChange={(e) =>
                    setDishForm({ ...dishForm, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  className="form-control"
                  placeholder="Image URL"
                  value={dishForm.image}
                  onChange={(e) =>
                    setDishForm({ ...dishForm, image: e.target.value })
                  }
                />
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={dishForm.price}
                  onChange={(e) =>
                    setDishForm({ ...dishForm, price: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  className="form-control"
                  placeholder="Description"
                  value={dishForm.description}
                  onChange={(e) =>
                    setDishForm({ ...dishForm, description: e.target.value })
                  }
                />
              </div>
              <div className="col-12 text-end">
                <button type="submit" className="btn btn-primary px-4 fw-bold">
                  {editingDish ? "Update Dish" : "Save Dish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageCuisines;
