import "./card.scss";

import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
const Card = ({ title, percent, amount }) => {
  return (
    <section className="cardColumn boxShadow">
      <CardHeader title={title} />
      <CardContent percent={percent} amount={amount} />
      <CardFooter />
    </section>
  );
};

export default Card;
