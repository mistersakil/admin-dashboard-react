import "./widget_single.scss";
import {
  KeyboardArrowUpOutlinedIcon,
  PeopleOutlineOutlinedIcon,
} from "../../icons";
const WidgetSingle = ({
  title,
  counter,
  percentClass,
  arrowIcon,
  widgetIcon,
  percentValue,
}) => {
  return (
    <article className="widget">
      <aside className="left">
        <h2 className="title">{title}</h2>
        <h3 className="counter">{counter}</h3>
        <a href="#" className="link">
          see all
        </a>
      </aside>
      <aside className="right">
        <div className={`counter ` + percentClass}>
          {arrowIcon}
          <span className="number">{percentValue}%</span>
        </div>
        {widgetIcon}
      </aside>
    </article>
  );
};

export default WidgetSingle;
