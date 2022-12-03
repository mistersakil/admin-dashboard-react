import "./home.scss";
import Layout from "../../components/layout/Layout";
import Widgets from "../../components/widgets/Widgets";
import Card from "../../components/card/Card";
import Graph from "../../components/graph/Graph";

const Home = () => {
  /**
   * List of card items
   * Generate card elements
   */
  const cards = [
    { id: 1, title: "total revenue", percent: "65", amount: "400K" },
    { id: 2, title: "total sales", percent: "55", amount: "200K" },
    { id: 3, title: "total growth", percent: "75", amount: "700K" },
  ];
  let cardsList = cards.map((cardSingle) => {
    return <Card {...cardSingle} key={cardSingle.id}></Card>;
  });

  /**
   * graphList
   * generate graph
   */
  const graphs = [
    {
      id: 1,
      title: "Last 6 months spending",
      data: [
        { month: "Jan", amount: 700 },
        { month: "Feb", amount: 300 },
        { month: "Mar", amount: 700 },
        { month: "Apr", amount: 200 },
        { month: "May", amount: 600 },
        { month: "Jun", amount: 850 },
      ],
    },
    {
      id: 2,
      title: "Last 6 months revenue",
      data: [
        { month: "Jan", amount: 300 },
        { month: "Feb", amount: 700 },
        { month: "Mar", amount: 200 },
        { month: "Apr", amount: 1150 },
        { month: "May", amount: 350 },
        { month: "Jun", amount: 550 },
      ],
    },
  ];
  let graphList = graphs.map((singleItem) => {
    return <Graph {...singleItem} key={singleItem.id}></Graph>;
  });
  return (
    <Layout>
      <main className="home">
        <Widgets />
        <section className="cardRow">{cardsList}</section>
        <section className="graphRow">{graphList}</section>
        <section className="tableRow"></section>
      </main>
    </Layout>
  );
};

export default Home;
