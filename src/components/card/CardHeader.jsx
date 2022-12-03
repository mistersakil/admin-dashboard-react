import "./card_header.scss";
import { MoreVertIcon } from "../../icons";
const CardHeader = ({ title }) => {
  return (
    <aside className="cardHeader">
      <h2 className="cardTitle">{title}</h2>
      <MoreVertIcon className="optionIcon" />
    </aside>
  );
};

export default CardHeader;
