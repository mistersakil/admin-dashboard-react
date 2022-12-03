import "./card.scss";
import { MoreVertIcon, ArrowDropUpOutlinedIcon } from "../../icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CardHeader from "./CardHeader";
const Card = ({ title, percent, amount }) => {
  return (
    <section className="cardColumn boxShadow">
      <CardHeader title={title} />
      <aside className="cardContent">
        <CircularProgressbar
          value={percent}
          text={`${percent}%`}
          className="progressBar"
          strokeWidth="4"
          styles={buildStyles({
            strokeLinecap: "round",
          })}
        />
        <h4 className="subTitle">total sales made today</h4>
        <h5 className="amount">Tk {amount}</h5>
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nam
          cum voluptas
        </p>
      </aside>
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
            <ArrowDropUpOutlinedIcon className="icon" />
            <span className="counter">Tk 12.5K</span>
          </p>
        </article>
      </aside>
    </section>
  );
};

export default Card;
