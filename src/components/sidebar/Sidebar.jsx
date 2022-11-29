import "./sidebar.scss";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="logo">
        <img src="/logo.png" alt="Logo" className="img" />
      </section>
      <nav className="menubar">
        <span className="block">block</span>
        <a href="#" className="menuLink">
          <ThreeDRotation />
          dashboard
        </a>
        <a href="#" className="menuLink">
          dashboard
        </a>
        <span className="block">block</span>
        <a href="#" className="menuLink">
          dashboard
        </a>
        <a href="#" className="menuLink">
          dashboard
        </a>
        <a href="#" className="menuLink">
          dashboard
        </a>
        <span className="block">block</span>
        <a href="#" className="menuLink">
          dashboard
        </a>
        <a href="#" className="menuLink">
          dashboard
        </a>
      </nav>
      <section className="theme">
        <span className="light">light</span>
        <span className="dark">dark</span>
      </section>
    </aside>
  );
};

export default Sidebar;
