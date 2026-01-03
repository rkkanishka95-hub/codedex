import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes) setLikes(Number(savedLikes));
  }, []);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem("likes", newLikes);
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2 className="title">❤️ Like Counter</h2>

        <button className="like-btn" onClick={handleLike}>
          👍 Like
        </button>

        <p className="count">Total Likes: {likes}</p>
      </div>
    </div>
  );
}

export default App;
