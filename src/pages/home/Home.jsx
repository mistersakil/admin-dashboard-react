import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <main className="container">
        <Navbar />
        <h1 className="title">home page</h1>
      </main>
    </section>
  );
};

export default Home;
