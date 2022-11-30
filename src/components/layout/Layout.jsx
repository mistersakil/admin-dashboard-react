import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <Navbar />
      </main>
    </div>
  );
};

export default Layout;
