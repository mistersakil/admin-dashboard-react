import "./navbar.scss";
import {
  SearchOutlinedIcon,
  FullscreenExitOutlinedIcon,
  NotificationsNoneOutlinedIcon,
  ChatBubbleOutlineOutlinedIcon,
  SettingsOutlinedIcon,
  DarkModeOutlinedIcon,
  PublicOutlinedIcon,
} from "../../icons";
const Navbar = () => {
  return (
    <section className="navbar">
      <aside className="searchBox">
        <input className="searchInput" type="text" placeholder="Search..." />
        <SearchOutlinedIcon className="searchIcon" />
      </aside>

      <aside className="headerIcons">
        <article className="iconItem" title="Fullscreen">
          <FullscreenExitOutlinedIcon className="icon" />
        </article>
        <a href="./" className="iconItem" title="Website">
          <PublicOutlinedIcon className="icon" />
        </a>
        <article className="iconItem">
          <DarkModeOutlinedIcon className="icon" />
        </article>

        <article className="iconItem">
          <NotificationsNoneOutlinedIcon className="icon" />
          <span className="counter">2</span>
        </article>
        <article className="iconItem">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <span className="counter">5</span>
        </article>
        <article className="iconItem" title="Settings">
          <span className="iconText">System Admin</span>
          <SettingsOutlinedIcon className="icon" />
        </article>
        <article className="iconItem">
          <img src="/favicon.ico" alt="avatar" className="avatar" />
        </article>
      </aside>
    </section>
  );
};

export default Navbar;
