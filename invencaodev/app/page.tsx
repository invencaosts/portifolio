import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Invencaodev
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
