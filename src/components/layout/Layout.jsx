import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Sidebar />
      <main className="container">
        <Navbar />
        <article className="contentArea">{children}</article>
      </main>
    </section>
  );
};

export default Layout;
