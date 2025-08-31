import FeaturedCars from "../components/HomeSection/FeaturedCars";
import Hero from "../components/HomeSection/Hero";
import Warranty from "../components/HomeSection/Warranty";
import AllFeatures from "../components/HomeSection/AllFeatures";

const Home = () => {
  return (
    <>
      <Hero />
      <Warranty />
      <FeaturedCars />
      <AllFeatures />
    </>
  );
};

export default Home;
