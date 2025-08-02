import React from 'react';
import { FaMapMarkerAlt, FaArrowRight, FaUtensils, FaShoppingBag, FaWineBottle, FaMotorcycle, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <section style={{
      background: '#f8fafc',
      padding: '0px 0 80px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(255,107,53,0.03) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255,142,83,0.03) 0%, transparent 50%)
        `,
        zIndex: 1
      }}></div>

      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Left Content */}
        <div className="hero-content" style={{
          animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          opacity: 0,
          transform: 'translateY(20px)'
        }}>
          {/* Delivery Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#ecfdf5',
            color: '#059669',
            padding: '8px 16px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '24px',
            border: '1px solid #d1fae5'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#10b981',
              borderRadius: '50%',
              marginRight: '8px',
              animation: 'pulse 2s infinite'
            }}></div>
            Delivering now in your area
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 800,
            color: '#111827',
            lineHeight: '1.1',
            marginBottom: '24px',
            letterSpacing: '-0.025em'
          }}>
            Restaurant food,<br />
            <span style={{ color: '#ff6b35' }}>delivered</span> to you
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            lineHeight: '1.6',
            marginBottom: '32px',
            fontWeight: 400
          }}>
            It's all here. Your favorite local restaurants and chains, grocery stores, and more. All available for
            delivery and pickup.
          </p>

          {/* Location Search */}
          <div className="location-search" style={{
            background: 'white',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '4px',
            display: 'flex',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'all 0.2s',
            marginBottom: '24px'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#ff6b35';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,107,53,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 20px',
              flex: 1,
              gap: '12px',
              borderRight: '1px solid #e5e7eb'
            }}>
              <FaMapMarkerAlt style={{ color: '#ff6b35', fontSize: '1.1rem' }} />
              <input type="text" placeholder="Enter delivery address" style={{
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                color: '#111827',
                background: 'transparent',
                flex: 1,
                fontWeight: 500
              }} />
            </div>

            <button style={{
              background: '#000',
              color: 'white',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#1f2937';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Find Food
              <FaArrowRight style={{ fontSize: '0.9rem' }} />
            </button>
          </div>

          {/* Quick Actions */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '40px'
          }}>
            <button style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              padding: '12px 20px',
              borderRadius: '100px',
              fontWeight: 600,
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#ff6b35';
                e.currentTarget.style.color = '#ff6b35';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.color = '#374151';
              }}
            >
              <FaUtensils />
              Restaurants
            </button>

            <button style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              padding: '12px 20px',
              borderRadius: '100px',
              fontWeight: 600,
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#ff6b35';
                e.currentTarget.style.color = '#ff6b35';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.color = '#374151';
              }}
            >
              <FaShoppingBag />
              Grocery
            </button>

            <button style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              padding: '12px 20px',
              borderRadius: '100px',
              fontWeight: 600,
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#ff6b35';
                e.currentTarget.style.color = '#ff6b35';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.color = '#374151';
              }}
            >
              <FaWineBottle />
              Alcohol
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '32px',
            paddingTop: '24px',
            borderTop: '1px solid #e5e7eb'
          }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827' }}>500K+</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: 500 }}>Restaurants</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827' }}>15M+</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: 500 }}>Orders Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827' }}>4.8</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: 500 }}>Average Rating</div>
            </div>
          </div>
        </div>

        {/* Right Content - Professional Image Grid */}
        <div className="hero-images" style={{
          position: 'relative',
          height: '600px',
          animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
          opacity: 0,
          transform: 'translateY(20px)'
        }}>
          {/* Main Featured Image */}
          <div className="main-image" style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '320px',
            height: '400px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            background: 'white',
            zIndex: 3
          }}>
            <img
              src="https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY="
              alt="Delicious pizza"
              style={{
                width: '100%',
                height: '280px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem', fontWeight: 700, color: '#111827' }}>Margherita Pizza</h3>
              <p style={{ margin: '0 0 12px', color: '#6b7280', fontSize: '0.9rem' }}>Fresh mozzarella, basil, tomato sauce</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827' }}>$18.99</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24' }}>
                  <FaStar style={{ fontSize: '0.8rem' }} />
                  <span style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Image */}
          <div className="secondary-image" style={{
            position: 'absolute',
            top: '120px',
            left: 0,
            width: '280px',
            height: '350px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            background: 'white',
            zIndex: 2
          }}>
            <img
              src="https://proveg.org/ng/wp-content/uploads/sites/4/2024/04/1_Burger_Vivera.jpg"
              alt="Gourmet burger"
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '18px' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: 700, color: '#111827' }}>Classic Burger</h3>
              <p style={{ margin: '0 0 10px', color: '#6b7280', fontSize: '0.85rem' }}>Beef patty, lettuce, tomato, onion</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#111827' }}>$14.50</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24' }}>
                  <FaStar style={{ fontSize: '0.75rem' }} />
                  <span style={{ fontSize: '0.85rem', color: '#111827', fontWeight: 600 }}>4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Delivery Card */}
          <div className="delivery-card" style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            background: 'white',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            zIndex: 4,
            minWidth: '200px',
            animation: 'float 3s ease-in-out infinite'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#ecfdf5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaMotorcycle style={{ color: '#10b981', fontSize: '1.1rem' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>Order #1247</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>On the way</div>
              </div>
            </div>
            <div style={{
              background: '#f3f4f6',
              height: '6px',
              borderRadius: '3px',
              overflow: 'hidden',
              marginBottom: '8px'
            }}>
              <div style={{
                background: '#10b981',
                height: '100%',
                width: '75%',
                borderRadius: '3px',
                animation: 'progress 2s ease infinite'
              }}></div>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 500 }}>Estimated delivery: 8 min</div>
          </div>

          {/* Small Rating Card */}
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '60px',
            background: 'white',
            padding: '12px 16px',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            zIndex: 4,
            animation: 'float 4s ease-in-out infinite reverse'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', color: '#fbbf24', fontSize: '0.8rem' }}>
                ★★★★★
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>4.9</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2px' }}>2,847 reviews</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes progress {
          0% {
            width: 60%;
          }
          50% {
            width: 85%;
          }
          100% {
            width: 75%;
          }
        }

        /* Enhanced Mobile-First Responsive Design */

        /* Extra Large Screens */
        @media (min-width: 1400px) {
          .container {
            max-width: 1600px;
            gap: 100px;
          }

          .hero-content h1 {
            font-size: 4.5rem;
          }

          .hero-images {
            height: 650px;
          }
        }

        /* Large Screens */
        @media (max-width: 1200px) {
          .container {
            max-width: 1200px;
            gap: 60px;
          }

          .hero-content h1 {
            font-size: 3.5rem;
          }

          .hero-images {
            height: 550px;
          }

          .main-image {
            width: 280px !important;
            height: 360px !important;
          }

          .secondary-image {
            width: 240px !important;
            height: 320px !important;
          }
        }

        /* Tablet and Below */
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
            padding: 0 32px !important;
          }

          .hero-content {
            order: 1;
          }

          .hero-images {
            order: 2;
            height: 500px !important;
            transform: scale(0.9);
            margin: 0 auto;
            justify-self: center;
          }

          .hero-content h1 {
            font-size: 3rem !important;
          }

          .hero-content p {
            font-size: 1.125rem;
          }
        }

        /* Mobile Landscape */
        @media (max-width: 896px) and (orientation: landscape) {
          section {
            min-height: auto !important;
            padding: 40px 0 60px !important;
          }

          .hero-content h1 {
            font-size: 2.5rem !important;
            margin-bottom: 16px !important;
          }

          .hero-images {
            height: 400px !important;
            transform: scale(0.8);
          }

          .container {
            gap: 40px !important;
          }
        }

        /* Standard Mobile */
        @media (max-width: 768px) {
          .container {
            padding: 0 20px !important;
            gap: 50px !important;
          }

          .hero-content h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }

          .hero-content p {
            font-size: 1rem !important;
            margin-bottom: 24px !important;
          }

          .location-search {
            flex-direction: column !important;
            gap: 0 !important;
            padding: 0 !important;
          }

          .location-search > div {
            border-right: none !important;
            border-bottom: 1px solid #e5e7eb !important;
            padding: 16px 20px !important;
          }

          .location-search button {
            padding: 16px 24px !important;
            border-radius: 0 0 8px 8px !important;
          }

          .hero-images {
            height: 400px !important;
            transform: scale(0.85);
          }

          .main-image {
            width: 260px !important;
            height: 320px !important;
            right: 20px !important;
          }

          .secondary-image {
            width: 220px !important;
            height: 280px !important;
            left: 20px !important;
            top: 100px !important;
          }

          .delivery-card {
            bottom: 20px !important;
            right: 20px !important;
            padding: 16px !important;
            min-width: 180px !important;
          }

          /* Stats responsive */
          .hero-content > div:last-child {
            gap: 24px !important;
            justify-content: center;
          }

          .hero-content > div:last-child > div {
            text-align: center;
          }
        }

        /* Small Mobile */
        @media (max-width: 640px) {
          .container {
            padding: 0 16px !important;
          }

          .hero-content h1 {
            font-size: 2.25rem !important;
          }

          /* Quick actions responsive */
          .hero-content > div:nth-child(5) {
            flex-wrap: wrap !important;
            gap: 12px !important;
            justify-content: center !important;
          }

          .hero-content > div:nth-child(5) button {
            flex: 1 1 auto !important;
            min-width: 120px !important;
            padding: 10px 16px !important;
            font-size: 0.85rem !important;
          }

          .hero-images {
            height: 350px !important;
            transform: scale(0.8);
          }

          .main-image {
            width: 240px !important;
            height: 300px !important;
          }

          .secondary-image {
            width: 200px !important;
            height: 260px !important;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 480px) {
          section {
            padding: 0 0 60px !important;
          }

          .hero-content h1 {
            font-size: 2rem !important;
            margin-bottom: 20px !important;
          }

          .hero-content p {
            font-size: 0.95rem !important;
          }

          .hero-images {
            height: 320px !important;
            transform: scale(0.75);
          }

          .main-image {
            width: 220px !important;
            height: 280px !important;
          }

          .secondary-image {
            width: 180px !important;
            height: 240px !important;
          }

          .delivery-card {
            min-width: 160px !important;
            padding: 12px !important;
          }

          /* Stats stack on very small screens */
          .hero-content > div:last-child {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center !important;
          }

          .hero-content > div:last-child > div {
            display: flex !important;
            align-items: center !important;
            gap: 12px !important;
          }
        }

        /* Ultra Small Mobile */
        @media (max-width: 360px) {
          .hero-content h1 {
            font-size: 1.75rem !important;
          }

          .hero-images {
            height: 280px !important;
            transform: scale(0.7);
          }

          .location-search input {
            font-size: 0.9rem !important;
          }

          .hero-content > div:nth-child(5) {
            flex-direction: column !important;
          }

          .hero-content > div:nth-child(5) button {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        /* High DPI / Retina Display Optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .hero-images img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          section {
            background: #0f172a !important;
          }

          .hero-content h1 {
            color: #f8fafc !important;
          }

          .hero-content p {
            color: #94a3b8 !important;
          }
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus Management for Accessibility */
        button:focus,
        input:focus {
          outline: 2px solid #ff6b35 !important;
          outline-offset: 2px !important;
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          button {
            min-height: 44px !important;
            min-width: 44px !important;
          }

          .location-search button {
            padding: 18px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;