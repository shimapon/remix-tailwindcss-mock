import Footer from "~/components/footer/Footer2";
import Header from "~/components/header/Header2";
import Content from "~/components/main/content1";

const Index: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Content />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Index;
