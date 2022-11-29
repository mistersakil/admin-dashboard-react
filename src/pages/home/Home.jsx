import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <h1 className="title">home page</h1>
    </div>
  );
};

export default Home;
