import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TopStatsBar, Navbar } from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Cuisines from "./components/Cuisines.jsx";
import Foodlocation from "./components/Foodlocation.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import AdminSignup from "./components/AdminSignup.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import CuisinePage from "./components/CuisinePage.jsx"; // ✅ User side cuisine page
import DishPage from "./components/DishPage.jsx";
import OrderConfirm from "./components/OrderConfirm.jsx";
import CartPage from "./components/CartPage.jsx";

// ✅ Admin Layout
import AdminLayout from "./components/admin/AdminLayout.jsx";
import DashboardHome from "./components/admin/DashboardHome.jsx";
import ManageUsers from "./components/admin/ManageUsers.jsx";
import ManageOrders from "./components/admin/ManageOrders.jsx";
import ManageRestaurants from "./components/admin/ManageRestaurants.jsx";
import ManageCuisines from "./components/admin/ManageCuisines.jsx"; // ✅ Renamed for admin

// ✅ Protected Route
function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Auth */}
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ✅ Admin Dashboard with Sidebar + Navbar */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="orders" element={<ManageOrders />} />
          <Route path="restaurants" element={<ManageRestaurants />} />
      
           <Route path="cuisines" element={<ManageCuisines />} /> {/* ✅ plural */}


         
        </Route>

        {/* Home Page → Protected */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <>
                <TopStatsBar />
                <Navbar />
                <Home />
                <Cuisines />
                <Foodlocation />
                <Footer />
              </>
            </PrivateRoute>
          }
        />

        {/* Cuisine Page (Dynamic) → Protected */}
        <Route
          path="/cuisine/:cuisineName"
          element={
            <PrivateRoute>
              <>
                <TopStatsBar />
                <Navbar />
                <CuisinePage />
                <Footer />
              </>
            </PrivateRoute>
          }
        />

        <Route
  path="/dish/:dishId"
  element={
    <PrivateRoute>
      <>
        <TopStatsBar />
        <Navbar />
        <DishPage />
        <Footer />
      </>
    </PrivateRoute>
  }
/>


<Route
  path="/order-confirm"
  element={
    <PrivateRoute>
      <>
        <TopStatsBar />
        <Navbar />
        <OrderConfirm />
        <Footer />
      </>
    </PrivateRoute>
  }
/>

<Route
  path="/cart"
  element={
    <PrivateRoute>
      <>
        <TopStatsBar />
        <Navbar />
        <CartPage />
        <Footer />
      </>
    </PrivateRoute>
  }
/>

        {/* Default Route → always go to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
