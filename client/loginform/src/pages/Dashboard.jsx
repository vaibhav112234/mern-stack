



// src/Dashboard.js
// src/Dashboard.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import the new CSS file for Dashboard

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a token in localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token, redirect to login page
      navigate("/");
    }
  }, [navigate]);

  // Card component
  const Card = (props) => {
    return (
      <div className="dashboard-card">
        <img src={props.imgsrc} alt="Series Image" className="dashboard-card-img" />
        <div className="dashboard-card-info">
          <span className="dashboard-card-category">{props.title}</span>
          <h3 className="dashboard-card-title">{props.sname}</h3>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="dashboard-card-btn">Watch Now</button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">List of Top Netflix Series</h1>
      <div className="dashboard-cards">
        <Card
          imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
          title="A Netflix Original Series"
          sname="DARK"
          link="https://www.netflix.com/in/title/80100172"
        />
        <Card
          imgsrc="https://unitedkpop.com/wp-content/uploads/2020/08/ec1.jpg"
          title="A Netflix Original Series"
          sname="Extra Curricular"
          link="https://www.netflix.com/in/title/80990668?source=35"
        />
        <Card
          imgsrc="https://images.ctfassets.net/4cd45et68cgf/5DIYYKy9JB7m90nozSIcM1/2acf7e826bbe6a656fd91c9179f17e0b/Stranger_Things__The_Experience.jpg?w=2000"
          title="A Netflix Original Series"
          sname="Stranger Things"
          link="https://www.netflix.com/in/title/80057281"
        />
        <Card
          imgsrc="https://i.ytimg.com/vi/5Dmr5rktfGY/maxresdefault.jpg"
          title="A Netflix Original Series"
          sname="IC 814: The  Hijack"
          link="https://www.netflix.com/in/title/81265803"
        />
        <Card
          imgsrc="https://i.ytimg.com/vi/5Dmr5rktfGY/maxresdefault.jpg"
          title="A Netflix Original Series"
          sname="IC 814: The  Hijack"
          link="https://www.netflix.com/in/title/81265803"
        />
        <Card
          imgsrc="https://i.ytimg.com/vi/5Dmr5rktfGY/maxresdefault.jpg"
          title="A Netflix Original Series"
          sname="IC 814: The  Hijack"
          link="https://www.netflix.com/in/title/81265803"
        />
        <Card
          imgsrc="https://i.ytimg.com/vi/5Dmr5rktfGY/maxresdefault.jpg"
          title="A Netflix Original Series"
          sname="IC 814:  Hijack"
          link="https://www.netflix.com/in/title/81265803"
        />
        <Card
          imgsrc="https://i.ytimg.com/vi/5Dmr5rktfGY/maxresdefault.jpg"
          title="A Netflix Original Series"
          sname="IC 814: The Hijack"
          link="https://www.netflix.com/in/title/81265803"
        />
      </div>
    </div>
  );
};

export default Dashboard;





