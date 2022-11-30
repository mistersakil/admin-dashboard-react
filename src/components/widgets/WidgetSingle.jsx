import "./widget_single.scss";
import {
  KeyboardArrowUpOutlinedIcon,
  PeopleOutlineOutlinedIcon,
} from "../../icons";
const WidgetSingle = () => {
  return (
    <article className="widget">
      <aside className="left">
        <h2 className="title">users</h2>
        <h3 className="counter">100</h3>
        <a href="#" className="link">
          see all
        </a>
      </aside>
      <aside className="right">
        <div className="counter">
          <KeyboardArrowUpOutlinedIcon className="icon" />
          <span className="number">+10%</span>
        </div>

        <PeopleOutlineOutlinedIcon className="icon" />
      </aside>
    </article>
  );
};

export default WidgetSingle;
