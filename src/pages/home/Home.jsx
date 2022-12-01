import "./home.scss";
import Layout from "../../components/layout/Layout";
import Widgets from "../../components/widgets/Widgets";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <Layout className="home">
      <Widgets />
      <Card />
    </Layout>
  );
};

export default Home;
