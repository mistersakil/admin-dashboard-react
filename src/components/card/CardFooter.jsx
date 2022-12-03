import "./cardFooter.scss";
import {
  ArrowDropUpOutlinedIcon,
  ArrowDropDownOutlinedIcon,
} from "../../icons";

const CardFooter = () => {
  return (
    <aside className="cardFooter">
      <article className="item ">
        <h6 className="title">target</h6>
        <p className="content green">
          <ArrowDropUpOutlinedIcon className="icon" />
          <span className="counter">Tk 12.5K</span>
        </p>
      </article>
      <article className="item ">
        <h6 className="title">last week</h6>
        <p className="content green">
          <ArrowDropUpOutlinedIcon className="icon" />
          <span className="counter">Tk 12.5K</span>
        </p>
      </article>
      <article className="item ">
        <h6 className="title">last month</h6>
        <p className="content red">
          <ArrowDropDownOutlinedIcon className="icon" />
          <span className="counter">Tk 12.5K</span>
        </p>
      </article>
    </aside>
  );
};

export default CardFooter;
