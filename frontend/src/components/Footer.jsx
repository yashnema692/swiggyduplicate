import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#f8f9fa', 
      color: '#333', 
      padding: '30px 0 20px', 
      fontFamily: "'Arial', sans-serif", 
      borderTop: '1px solid #e9ecef'
    }}>
      <div className="container">
        <div className="row g-4">
          {/* Company Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Company</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  About Us & FAQ
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Media & Magazines
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Customers Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Customers</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Catering Promotions
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Catering Reviews
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Giveaways & Tips
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Best Catering in Singapore 2025
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Customers Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Corporate Customers</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Corporate Account
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Sign up for Corporate Account
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  30 Days Credit Terms Eligibility
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Request Quotations
                </a>
              </li>
            </ul>
          </div>

          {/* Catering in Singapore Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Catering in Singapore</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Catering for 10 pax
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Catering for 20 pax
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Catering for 50 pax
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Catering for 1000 pax
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Cake Shops Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Featured Cake Shops</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Cat & the fiddle
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Eatzi Gourmet Bakery
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Entertainment
                </a>
              </li>
            </ul>
          </div>

          {/* Budget Catering Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Catering by Budget</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Under $4 per pax
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  $6-$8 per pax
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  $13-$15 per pax
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Above $32 per pax
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {/* Community Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Community</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  FoodLine Blogger Program
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Caterers Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Featured Caterers</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Stamford Catering
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Select Catering
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Katong Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Caterers Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Caterers</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Halal Catering
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Wedding Catering
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Mini Buffet Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Cakes Delivery Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Cakes Delivery</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  All Cakes Delivery
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Birthday Cakes
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Durian Cake Singapore
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Cuisine Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Popular Cuisine</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Chinese Food Catering
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Thai Food Catering
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Japanese Food Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Cakes Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '15px', fontSize: '16px' }}>Popular Cakes</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  All Cakes & Desserts
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Birthday Cakes
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="#" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Halal Cakes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Search and Contact Info */}
        <div className="row mt-4">
          <div className="col-md-6">
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #dee2e6',
              padding: '15px',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <h5 style={{ color: '#e63946', fontWeight: 600, marginBottom: '10px', fontSize: '16px' }}>
                Go directly to a menu
              </h5>
              <div className="input-group" style={{ maxWidth: '300px' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Menu ID"
                  style={{ border: '1px solid #ced4da', fontSize: '14px', height: '36px' }}
                />
                <button
                  className="btn btn-danger"
                  type="button"
                  style={{ backgroundColor: '#e63946', borderColor: '#e63946', fontSize: '14px', height: '36px' }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#e63946', marginRight: '10px', width: '20px' }} />
                <a href="mailto:cakes@foodline.gg" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px' }}>
                  sales@foodline.sg
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faPhone} style={{ color: '#e63946', marginRight: '10px', width: '20px' }} />
                <a href="tel:61000029" style={{ color: '#495057', textDecoration: 'none', fontSize: '14px' }}>
                  6100 0029
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faIdCard} style={{ color: '#e63946', marginRight: '10px', width: '20px' }} />
                <span style={{ color: '#495057', fontSize: '14px' }}>GST Registration No: 201334361E</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links and Social */}
        <div className="row mt-4">
          <div className="col-md-8">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' }}>
              <a
                href="#"
                style={{
                  color: '#495057',
                  textDecoration: 'none',
                  fontSize: '13px',
                  backgroundColor: '#e9ecef',
                  padding: '4px 8px',
                  borderRadius: '3px'
                }}
              >
                Catering Singapore
              </a>
              <a
                href="#"
                style={{
                  color: '#495057',
                  textDecoration: 'none',
                  fontSize: '13px',
                  backgroundColor: '#e9ecef',
                  padding: '4px 8px',
                  borderRadius: '3px'
                }}
              >
                Buffet Catering
              </a>
              <a
                href="#"
                style={{
                  color: '#495057',
                  textDecoration: 'none',
                  fontSize: '13px',
                  backgroundColor: '#e9ecef',
                  padding: '4px 8px',
                  borderRadius: '3px'
                }}
              >
                Chinese New Year Catering
              </a>
              <a
                href="#"
                style={{
                  color: '#495057',
                  textDecoration: 'none',
                  fontSize: '13px',
                  backgroundColor: '#e9ecef',
                  padding: '4px 8px',
                  borderRadius: '3px'
                }}
              >
                Christmas Catering
              </a>
              <a
                href="#"
                style={{
                  color: '#495057',
                  textDecoration: 'none',
                  fontSize: '13px',
                  backgroundColor: '#e9ecef',
                  padding: '4px 8px',
                  borderRadius: '3px'
                }}
              >
                Terms of Use
              </a>
              <a
                href="#"
                style={{
                  color: '#495057',
                  textDecoration: 'none',
                  fontSize: '13px',
                  backgroundColor: '#e9ecef',
                  padding: '4px 8px',
                  borderRadius: '3px'
                }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
              <a href="#" style={{ color: '#495057', fontSize: '18px', transition: 'color 0.2s' }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" style={{ color: '#495057', fontSize: '18px', transition: 'color 0.2s' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" style={{ color: '#495057', fontSize: '18px', transition: 'color 0.2s' }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" style={{ color: '#495057', fontSize: '18px', transition: 'color 0.2s' }}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-12">
            <hr style={{ borderColor: '#dee2e6', margin: '10px 0' }} />
            <p style={{ color: '#6c757d', textAlign: 'center', fontSize: '13px', margin: 0 }}>
              &copy; 2025 FoodLine. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;