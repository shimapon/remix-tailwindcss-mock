import Footer from "~/components/footer/Footer1";
import Header from "~/components/header/Header1";
import Blog from "~/components/main/blog1";

const Index: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Blog></Blog>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Index;
