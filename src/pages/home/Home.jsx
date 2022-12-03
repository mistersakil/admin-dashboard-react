import "./home.scss";
import Layout from "../../components/layout/Layout";
import Widgets from "../../components/widgets/Widgets";
import Card from "../../components/card/Card";

const Home = () => {
  const cards = [
    { title: "total revenue", percent: "65", amount: "400K" },
    { title: "total sales", percent: "55", amount: "200K" },
    { title: "total growth", percent: "75", amount: "700K" },
  ];
  let cardsList = cards.map((cardSingle) => {
    return <Card {...cardSingle}></Card>;
  });
  return (
    <Layout>
      <main className="home">
        <Widgets />
        <section className="graphsRow">{cardsList}</section>
      </main>
    </Layout>
  );
};

export default Home;
