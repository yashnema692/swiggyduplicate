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
      <h2 className="mb-4 text-center text-primary fw-bold">
        🍴 Manage Cuisines & Dishes
      </h2>

      {/* Cuisine Form */}
      <div className="card mb-4 shadow-sm border-0 rounded-3">
        <div className="card-header bg-gradient text-white fw-semibold" style={{background:"linear-gradient(90deg,#6a11cb,#2575fc)"}}>
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
              <button type="submit" className="btn btn-success px-4">
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
            <div className="card shadow-sm border-0 rounded-3 h-100">
              {cuisine.image && (
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column bg-light">
                <h5 className="card-title text-dark">{cuisine.name}</h5>
                <p className="card-text text-muted small">{cuisine.description}</p>

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

                {/* Dishes with Scroll */}
                <h6 className="mt-3 fw-semibold">Dishes</h6>
                <div
                  className="dish-list"
                  style={{
                    maxHeight: "160px",
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
                        <div>
                          🍽 <strong>{dish.name}</strong> – ₹{dish.price}
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
                            onClick={() => handleDeleteDish(cuisine._id, dish._id)}
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted small">No dishes added yet.</p>
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
        <div className="card mt-4 shadow-sm border-0 rounded-3">
          <div className="card-header bg-success text-white fw-semibold">
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
                <button type="submit" className="btn btn-success px-4">
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
