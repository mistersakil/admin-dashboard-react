import "./sidebar.scss";

import {
  GridViewOutlinedIcon,
  PeopleOutlineOutlinedIcon,
  CategoryOutlinedIcon,
  ProductionQuantityLimitsOutlinedIcon,
  AndroidOutlinedIcon,
  ApartmentOutlinedIcon,
  MonetizationOnOutlinedIcon,
  RedeemOutlinedIcon,
  MoneyOffOutlinedIcon,
  ConstructionOutlinedIcon,
  LogoutOutlinedIcon,
  WbSunnyOutlinedIcon,
  NightsStayOutlinedIcon,
  PublicOutlinedIcon,
} from "../../icons";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="logo">
        <img src="/favicon.ico" alt="Logo" className="img" />
        <span className="text">Admin</span>
      </section>
      <nav className="menubar">
        <span className="block">default</span>
        <a href="./" className="menuLink">
          <GridViewOutlinedIcon className="icon" />
          dashboard
        </a>
        <span className="block">operations</span>
        <a href="#" className="menuLink">
          <CategoryOutlinedIcon className="icon" />
          category
        </a>
        <a href="#" className="menuLink">
          <ProductionQuantityLimitsOutlinedIcon className="icon" />
          products
        </a>
        <a href="#" className="menuLink">
          <AndroidOutlinedIcon className="icon" />
          brands
        </a>
        <a href="#" className="menuLink">
          <ApartmentOutlinedIcon className="icon" />
          units
        </a>
        <span className="block">reports</span>
        <a href="#" className="menuLink">
          <MonetizationOnOutlinedIcon className="icon" />
          purchase
        </a>
        <a href="#" className="menuLink">
          <RedeemOutlinedIcon className="icon" />
          orders
        </a>
        <a href="#" className="menuLink">
          <MoneyOffOutlinedIcon className="icon" />
          wages
        </a>

        <span className="block">system</span>
        <a href="#" className="menuLink">
          <PeopleOutlineOutlinedIcon className="icon" />
          users
        </a>
        <a href="#" className="menuLink">
          <ConstructionOutlinedIcon className="icon" />
          settings
        </a>
        <a href="#" className="menuLink">
          <LogoutOutlinedIcon className="icon" />
          logout
        </a>
        <a href="#" className="menuLink">
          <ConstructionOutlinedIcon className="icon" />
          settings
        </a>
        <a href="#" className="menuLink">
          <LogoutOutlinedIcon className="icon" />
          logout
        </a>
      </nav>
      <section className="footerIcons">
        <span className="type light" title="Light">
          <WbSunnyOutlinedIcon className="icon" />
        </span>
        <span className="type dark" title="Dark">
          <NightsStayOutlinedIcon className="icon" />
        </span>

        <span className="type" title="Logout">
          <LogoutOutlinedIcon className="icon" />
        </span>
      </section>
    </aside>
  );
};

export default Sidebar;
