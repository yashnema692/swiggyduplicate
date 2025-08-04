import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cuisines = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const cuisines = [
    { title: "Chinese", image: "https://images.herzindagi.info/image/2022/Feb/delicious-chinese-food.jpg", count: "2,636 menus", },
    { title: "Western", image: "https://cdn.pixabay.com/photo/2015/06/30/19/56/food-826744_640.jpg", count: "438 menus",  },
    { title: "Thai", image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0", count: "438 menus" },
    { title: "Japanese", image: "https://media.istockphoto.com/id/1300135479/photo/traditional-japanese-dishes-sushi.jpg", count: "140 menus", },
    { title: "Indian", image: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try.jpg", count: "438 menus" },
    { title: "Italian", image: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-assortment_23-2149141339.jpg", count: "24 menus", },
    { title: "Nonya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lprCAYjdAlgctZT39E4dpcVNIAe62r6BQw&s", count: "40 menus",  }
  ];

  useEffect(() => {
    const updateMaxScroll = () => {
      if (carouselRef.current) {
        setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
      }
    };
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  return (
    <section className="cuisine-section">
      <div className="section-header">
        <h2 className="section-title">Popular Cuisines</h2>
        <a href="#" className="view-all">View All ➝</a>
      </div>

      <div className="carousel-container">
        <div className="cuisine-carousel" ref={carouselRef}>
          {cuisines.map((cuisine, index) => (
            <Link 
              to={`/cuisine/${cuisine.title.toLowerCase()}`} 
              key={index} 
              className="cuisine-card"
            >
              <div className="card-image-container">
                <img src={cuisine.image} className="card-image" alt={cuisine.title} />
                {cuisine.badge && <span className="card-badge">{cuisine.badge}</span>}
              </div>
              <div className="card-content">
                <h3 className="card-title">{cuisine.title}</h3>
                <p className="card-count">{cuisine.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cuisine-section { padding: 20px 0; background: #fafafa; }
        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 0 20px; }
        .section-title { font-size: 1.8rem; font-weight: 700; color: #222; }
        .view-all { color: #ff5a1f; font-weight: 600; text-decoration: none; font-size: 0.95rem; }
        .cuisine-carousel { display: flex; gap: 20px; overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; padding: 10px 20px; }
        .cuisine-carousel::-webkit-scrollbar { display: none; }
        .cuisine-card { flex: 0 0 220px; background: white; border-radius: 16px; box-shadow: 0 6px 18px rgba(0,0,0,0.08); text-decoration: none; color: inherit; transition: transform 0.3s ease; }
        .cuisine-card:hover { transform: translateY(-5px); }
        .card-image-container { width: 100%; height: 160px; overflow: hidden; border-top-left-radius: 16px; border-top-right-radius: 16px; }
        .card-image { width: 100%; height: 100%; object-fit: cover; }
        .card-badge { position: absolute; top: 12px; right: 12px; background: #fff9; color: #ff5a1f; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: 600; }
        .card-content { padding: 15px; text-align: center; }
        .card-title { font-size: 1.1rem; font-weight: 700; }
        .card-count { font-size: 0.9rem; color: #777; }
        @media (max-width: 768px) { .cuisine-card { flex: 0 0 160px; } .card-image-container { height: 120px; } }
      `}</style>
    </section>
  );
};

export default Cuisines;
