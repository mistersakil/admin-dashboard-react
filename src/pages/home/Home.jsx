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
          <Card title="total revenue" percent="65" amount="400K"></Card>
          <Card title="total sales" percent="55" amount="200K"></Card>
          <Card title="total growth" percent="75" amount="700K"></Card>
          {/* <div className="graph">graph</div> */}
        </section>
      </main>
    </Layout>
  );
};

export default Home;
