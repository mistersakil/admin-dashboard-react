import "./home.scss";
import Layout from "../../components/layout/Layout";
import Widgets from "../../components/widgets/Widgets";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <Layout>
      <main className="home">
        <Widgets />
        <section className="graphsRow">
          <Card></Card>
          <div className="graph">graph</div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
