import "./card.scss";
import { MoreVertIcon, ArrowDropUpOutlinedIcon } from "../../icons";
const Card = () => {
  return (
    <section className="cardColumn boxShadow">
      <aside className="cardHeader">
        <h2 className="cardTitle">total revenue</h2>
        <MoreVertIcon className="optionIcon" />
      </aside>
      <aside className="cardContent">
        <h4 className="subTitle">total sales made today</h4>
        <h5 className="amount">Tk 500K</h5>
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nam
          cum voluptas
        </p>
      </aside>
      <aside className="cardFooter">
        <article className="item boxShadow">
          <h6 className="title">target</h6>
          <p className="content green">
            <ArrowDropUpOutlinedIcon className="icon" />
            <span className="counter">Tk 12.5K</span>
          </p>
        </article>
        <article className="item boxShadow">
          <h6 className="title">last week</h6>
          <p className="content green">
            <ArrowDropUpOutlinedIcon className="icon" />
            <span className="counter">Tk 12.5K</span>
          </p>
        </article>
        <article className="item boxShadow">
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
