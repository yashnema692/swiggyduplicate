import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodLocation = () => {
  // Sample restaurant data
  const initialRestaurants = [
    {
      id: 1,
      name: "Pizza Nut",
      rating: 4.3,
      deliveryTime: "40-45 mins",
      cuisine: "Pizzas",
      location: "Parasia Road",
      city: "Parasia",
      priceRange: "Rs. 300-Rs. 600",
      isVeg: false,
      hasOffer: true,
      offerText: "₹200 OFF ABOVE ₹999",
      image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/04/11165342/Untitled-design-2022-04-11T165320.988.jpg"
    },
    {
      id: 2,
      name: "Blue Chilli Restaurant",
      rating: 4.1,
      deliveryTime: "35-40 mins",
      cuisine: "South Indian, Indian, Fast Food",
      location: "Prasia Road",
      city: "Prasia",
      priceRange: "Less than Rs. 300",
      isVeg: false,
      hasOffer: true,
      offerText: "20% OFF UPTO ₹120",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/c1/51/64/kava-grill-lounge-offers.jpg?w=1200&h=900&s=1"
    },
    {
      id: 3,
      name: "Bakery World",
      rating: 4.2,
      deliveryTime: "35-40 mins",
      cuisine: "Bakery, Ice Cream, Snacks, Beverages",
      location: "Parasia Road",
      city: "Parasia",
      priceRange: "Less than Rs. 300",
      isVeg: true,
      hasOffer: true,
      offerText: "20% OFF UPTO ₹120",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/25/97/71/nino-d-aversa-bakery.jpg?w=900&h=500&s=1"
    },
    {
      id: 4,
      name: "Hotel Sai Bajrang Family",
      rating: 4.2,
      deliveryTime: "35-40 mins",
      cuisine: "pure veg, North Indian, Chinese",
      location: "Chhindwara City",
      city: "Chhindwara",
      priceRange: "Rs. 300-Rs. 600",
      isVeg: true,
      hasOffer: false,
      offerText: "",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/84/5a/83/welcome-to-ramashram.jpg?w=900&h=500&s=1"
    },
    {
      id: 5,
      name: "Spice Garden",
      rating: 4.5,
      deliveryTime: "30-35 mins",
      cuisine: "North Indian, Chinese",
      location: "Chhindwara Road",
      city: "Chhindwara",
      priceRange: "Rs. 300-Rs. 600",
      isVeg: false,
      hasOffer: true,
      offerText: "10% OFF UPTO ₹100",
      image: "https://fuddo.in//assets/images/data/Pista_House_Sanath_Nagar.jpg"
    },
    {
      id: 6,
      name: "Cafe Coffee Day",
      rating: 4.0,
      deliveryTime: "25-30 mins",
      cuisine: "Cafe, Beverages, Snacks",
      location: "Prasia Road",
      city: "Prasia",
      priceRange: "Less than Rs. 300",
      isVeg: true,
      hasOffer: false,
      offerText: "",
      image: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?cs=srgb&dl=pexels-naimbic-2290753.jpg&fm=jpg"
    }
  ];

  // State for filters
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [sortBy, setSortBy] = useState("");
  const [ratingFilter, setRatingFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");
  const [vegFilter, setVegFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  // Get unique cities for filter
  const cities = [...new Set(initialRestaurants.map(restaurant => restaurant.city))];

  // Apply filters
  const applyFilters = () => {
    let filtered = [...initialRestaurants];

    // Apply rating filter
    if (ratingFilter) {
      filtered = filtered.filter(restaurant => restaurant.rating >= 4.0);
    }

    // Apply price filter
    if (priceFilter === "Less than Rs. 300") {
      filtered = filtered.filter(restaurant => restaurant.priceRange === "Less than Rs. 300");
    } else if (priceFilter === "Rs. 300-Rs. 600") {
      filtered = filtered.filter(restaurant => restaurant.priceRange === "Rs. 300-Rs. 600");
    }

    // Apply veg filter
    if (vegFilter === "Pure Veg") {
      filtered = filtered.filter(restaurant => restaurant.isVeg);
    } else if (vegFilter === "Non Veg") {
      filtered = filtered.filter(restaurant => !restaurant.isVeg);
    }

    // Apply city filter
    if (cityFilter) {
      filtered = filtered.filter(restaurant => restaurant.city === cityFilter);
    }

    // Apply sorting
    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "deliveryTime") {
      filtered.sort((a, b) => {
        const aTime = parseInt(a.deliveryTime.split("-")[0]);
        const bTime = parseInt(b.deliveryTime.split("-")[0]);
        return aTime - bTime;
      });
    }

    setRestaurants(filtered);
  };

  // Reset all filters
  const resetFilters = () => {
    setSortBy("");
    setRatingFilter(false);
    setPriceFilter("");
    setVegFilter("");
    setCityFilter("");
    setRestaurants(initialRestaurants);
  };

  // Apply filters whenever any filter changes
  React.useEffect(() => {
    applyFilters();
  }, [sortBy, ratingFilter, priceFilter, vegFilter, cityFilter]);

  // Custom styles with your color scheme
  const styles = {
    header: {
      backgroundColor: '#F32556',
      color: 'white',
      padding: '15px 0',
      marginBottom: '30px',
      borderRadius: '8px'
    },
    filterCard: {
      border: 'none',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      marginBottom: '30px'
    },
    filterTitle: {
      color: '#F32556',
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '15px'
    },
    offerBadge: {
      backgroundColor: '#FF6B35',
      color: 'white'
    },
    ratingBadge: {
      backgroundColor: '#F32556',
      color: 'white'
    },
    resetButton: {
      backgroundColor: 'white',
      color: '#F32556',
      border: '1px solid #F32556'
    },
    restaurantCard: {
      border: 'none',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      height: '100%'
    },
    restaurantCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(243, 37, 86, 0.15)'
    }
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div style={styles.header} className="text-center">
        <h1 className="mb-0">Restaurants with online food delivery</h1>
      </div>
      
      {/* Filters Section */}
      <div className="card mb-4" style={styles.filterCard}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 mb-3">
              <h5 style={styles.filterTitle}>Sort By</h5>
              <select 
                className="form-select" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ borderColor: '#F32556' }}
              >
                <option value="">None</option>
                <option value="rating">Rating</option>
                <option value="deliveryTime">Delivery Time</option>
              </select>
            </div>
            
            <div className="col-md-2 mb-3">
              <h5 style={styles.filterTitle}>City</h5>
              <select 
                className="form-select" 
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                style={{ borderColor: '#F32556' }}
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            <div className="col-md-2 mb-3">
              <h5 style={styles.filterTitle}>Offers</h5>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="ratingFilter"
                  checked={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.checked)}
                  style={{ accentColor: '#F32556' }}
                />
                <label className="form-check-label" htmlFor="ratingFilter">
                  Ratings 4.0+
                </label>
              </div>
            </div>
            
            <div className="col-md-2 mb-3">
              <h5 style={styles.filterTitle}>Price Range</h5>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="priceFilter"
                  id="price1"
                  checked={priceFilter === "Rs. 300-Rs. 600"}
                  onChange={() => setPriceFilter("Rs. 300-Rs. 600")}
                  style={{ accentColor: '#F32556' }}
                />
                <label className="form-check-label" htmlFor="price1">
                  Rs. 300-Rs. 600
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="priceFilter"
                  id="price2"
                  checked={priceFilter === "Less than Rs. 300"}
                  onChange={() => setPriceFilter("Less than Rs. 300")}
                  style={{ accentColor: '#F32556' }}
                />
                <label className="form-check-label" htmlFor="price2">
                  Less than Rs. 300
                </label>
              </div>
            </div>
            
            <div className="col-md-2 mb-3">
              <h5 style={styles.filterTitle}>Food Type</h5>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="vegFilter"
                  id="veg"
                  checked={vegFilter === "Pure Veg"}
                  onChange={() => setVegFilter("Pure Veg")}
                  style={{ accentColor: '#F32556' }}
                />
                <label className="form-check-label" htmlFor="veg">
                  Pure Veg
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="vegFilter"
                  id="nonVeg"
                  checked={vegFilter === "Non Veg"}
                  onChange={() => setVegFilter("Non Veg")}
                  style={{ accentColor: '#F32556' }}
                />
                <label className="form-check-label" htmlFor="nonVeg">
                  Non Veg
                </label>
              </div>
            </div>
            
            <div className="col-md-1 d-flex align-items-end mb-3">
              <button 
                className="btn btn-sm" 
                style={styles.resetButton}
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Restaurants List */}
      <div className="row">
        {restaurants.length > 0 ? (
          restaurants.map(restaurant => (
            <div key={restaurant.id} className="col-md-6 col-lg-4 mb-4">
              <div 
                className="card h-100" 
                style={styles.restaurantCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = styles.restaurantCardHover.transform}
                onMouseLeave={(e) => e.currentTarget.style.transform = styles.restaurantCardHover.transform}
              >
                {restaurant.hasOffer && (
                  <div className="card-header" style={styles.offerBadge}>
                    {restaurant.offerText}
                  </div>
                )}
                <img 
                  src={restaurant.image} 
                  className="card-img-top" 
                  alt={restaurant.name}
                  style={{ height: "180px", objectFit: "cover", borderTopLeftRadius: restaurant.hasOffer ? '0' : '8px', borderTopRightRadius: restaurant.hasOffer ? '0' : '8px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge" style={styles.ratingBadge}>
                      {restaurant.rating} ★
                    </span>
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <p className="card-text text-muted">{restaurant.cuisine}</p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text mb-0">
                      <small className="text-muted">{restaurant.location}</small>
                    </p>
                    <p className="card-text mb-0">
                      <small className="text-muted">{restaurant.city}</small>
                    </p>
                  </div>
                  <p className="card-text mt-2">
                    <strong>{restaurant.priceRange}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning text-center">
              No restaurants match your filters. Please try different criteria.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodLocation;