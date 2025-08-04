function DashboardHome() {
  return (
    <div>
      <h2 className="fw-bold">📊 Dashboard Overview</h2>
      <p className="text-muted">Here you can track orders, users, and restaurants.</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Total Users</h5>
            <p className="fs-3 text-primary">120</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Total Orders</h5>
            <p className="fs-3 text-success">350</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Restaurants</h5>
            <p className="fs-3 text-danger">18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
