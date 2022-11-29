import "./sidebar.scss";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="logo">
        <img src="/logo.png" alt="Logo" className="img" />
      </section>
      <nav className="menubar">
        <span className="block">block</span>
        <a href="#" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
          dashboard
        </a>
        <a href="#" className="menuLink">
          <PeopleOutlineOutlinedIcon className="icon" />
          dashboard
        </a>
        <span className="block">block</span>
        <a href="#" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
          dashboard
        </a>
        <a href="#" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
          dashboard
        </a>
        <a href="#" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
          dashboard
        </a>
        <a href="#" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
          dashboard
        </a>
        <span className="block">system</span>
        <a href="#" className="menuLink">
          <PeopleOutlineOutlinedIcon className="icon" />
          users
        </a>
        <a href="#" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
          dashboard
        </a>
        <span className="block">system</span>
        <a href="#" className="menuLink">
          <PeopleOutlineOutlinedIcon className="icon" />
          users
        </a>
        <a href="#" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
          dashboard
        </a>
        <span className="block">system</span>
        <a href="#" className="menuLink">
          <PeopleOutlineOutlinedIcon className="icon" />
          users
        </a>
        <a href="#" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
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
