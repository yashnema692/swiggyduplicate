import React, { useRef, useEffect, useState } from 'react';

const Cuisines = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const cuisines = [
    {
      title: "Chinese",
      image: "https://images.herzindagi.info/image/2022/Feb/delicious-chinese-food.jpg",
      count: "2,636 menus",
      badge: "Trending"
    },
    {
      title: "Western",
      image: "https://cdn.pixabay.com/photo/2015/06/30/19/56/food-826744_640.jpg",
      count: "438 menus",
      badge: "Popular"
    },
    {
      title: "Thai",
      image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      count: "438 menus",
      badge: "Spicy"
    },
    {
      title: "Japanese",
      image: "https://media.istockphoto.com/id/1300135479/photo/traditional-japanese-dishes-sushi-and-sushi-roll-set-rice-bowls-tuna-tataki.jpg?s=612x612&w=0&k=20&c=jfmZgNpWEhw6dQIzlLgtNYVVsKv6A7PSGsp1nvB7FRg=",
      count: "140 menus",
      badge: "Healthy"
    },
    {
      title: "Indian",
      image: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/thali-1733153567.jpg",
      count: "438 menus"
    },
    {
      title: "Italian",
      image: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-assortment_23-2149141339.jpg?semt=ais_hybrid&w=740",
      count: "24 menus",
      badge: "New"
    },
    {
      title: "Nonya/ Peranakan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lprCAYjdAlgctZT39E4dpcVNIAe62r6BQw&s",
      count: "40 menus",
      badge: "New"
    }
  ];

  useEffect(() => {
    const updateMaxScroll = () => {
      if (carouselRef.current) {
        setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
      }
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    return () => window.removeEventListener('resize', updateMaxScroll);
  }, []);

  const scrollTo = (position) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: position,
        behavior: 'smooth'
      });
      setScrollPosition(position);
    }
  };

  const next = () => {
    const cardWidth = 220 + 20; // width + gap
    const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time
    const newPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
    scrollTo(newPosition);
  };

  const prev = () => {
    const cardWidth = 220 + 20; // width + gap
    const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time
    const newPosition = Math.max(scrollPosition - scrollAmount, 0);
    scrollTo(newPosition);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [scrollPosition, maxScroll]);

  return (
    <section className="cuisine-section">
      <div className="section-header">
        <h2 className="section-title">Popular Cuisines</h2>
        <a href="#" className="view-all">
          View All
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="carousel-container">
        <div className="cuisine-carousel" ref={carouselRef}>
          {cuisines.map((cuisine, index) => (
            <div className="cuisine-card" key={index}>
              <div className="card-image-container">
                <img src={cuisine.image} className="card-image" alt={`${cuisine.title} Cuisine`} />
                {cuisine.badge && <span className="card-badge">{cuisine.badge}</span>}
              </div>
              <div className="card-content">
                <h3 className="card-title">{cuisine.title}</h3>
                <p className="card-count">{cuisine.count}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="nav-btn prev-btn" 
          onClick={prev} 
          aria-label="Previous"
          disabled={scrollPosition <= 0}
        >
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button 
          className="nav-btn next-btn" 
          onClick={next} 
          aria-label="Next"
          disabled={scrollPosition >= maxScroll}
        >
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .cuisine-section {
          padding: 20px 0;
          background: #e5e2e29e;
          background-image: linear-gradient(rgba(255, 255, 255, 0.916), rgba(255, 255, 255, 0.97)),
            url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80');
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding: 0 30px;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #222;
          margin: 0;
          font-family: 'Helvetica Neue', sans-serif;
        }

        .view-all {
          color: #ff5a1f;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .view-all:hover {
          color: #e04b1a;
          text-decoration: underline;
        }

        .view-all svg {
          width: 14px;
          height: 14px;
        }

        .carousel-container {
          position: relative;
          padding: 0 30px;
        }

        .cuisine-carousel {
          display: flex;
          gap: 20px;
          padding: 10px 0;
          scroll-behavior: smooth;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .cuisine-carousel::-webkit-scrollbar {
          display: none;
        }

        .cuisine-card {
          flex: 0 0 220px;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .cuisine-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }

        .card-image-container {
          width: 100%;
          height: 160px;
          position: relative;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .cuisine-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.9);
          color: #ff5a1f;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          backdrop-filter: blur(4px);
        }

        .card-content {
          padding: 16px;
          text-align: center;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #333;
          margin: 0 0 6px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-count {
          font-size: 0.8rem;
          color: #777;
          margin: 0;
          font-weight: 500;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.2s ease;
        }

        .nav-btn:hover {
          background: #ff5a1f;
        }

        .nav-btn:hover svg {
          stroke: white;
        }

        .nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .prev-btn {
          left: 5px;
        }

        .next-btn {
          right: 5px;
        }

        .nav-icon {
          width: 18px;
          height: 18px;
          stroke: #ff5a1f;
          stroke-width: 2.5;
          transition: stroke 0.2s ease;
        }

        @media (max-width: 768px) {
          .cuisine-card {
            flex: 0 0 180px;
          }

          .card-image-container {
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
};

export default Cuisines;