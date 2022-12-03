import "./cardContent.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CardContent = ({ percent, amount }) => {
  return (
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
  );
};

export default CardContent;
