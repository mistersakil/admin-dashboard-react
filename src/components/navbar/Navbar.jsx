import "./navbar.scss";
import {
  SearchOutlinedIcon,
  FullscreenExitOutlinedIcon,
  NotificationsNoneOutlinedIcon,
  ChatBubbleOutlineOutlinedIcon,
  SettingsOutlinedIcon,
  DarkModeOutlinedIcon,
} from "../../icons";
const Navbar = () => {
  return (
    <section className="navbar">
      <aside className="searchBox">
        <input className="searchInput" type="text" placeholder="Search..." />
        <SearchOutlinedIcon className="searchIcon" />
      </aside>

      <aside className="headerIcons">
        <article className="iconItem">
          <DarkModeOutlinedIcon className="icon" />
        </article>
        <article className="iconItem">
          <FullscreenExitOutlinedIcon className="icon" />
        </article>
        <article className="iconItem">
          <NotificationsNoneOutlinedIcon className="icon" />
        </article>
        <article className="iconItem">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
        </article>
        <article className="iconItem">
          <SettingsOutlinedIcon className="icon" />
        </article>
      </aside>
    </section>
  );
};

export default Navbar;
