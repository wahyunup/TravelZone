import About from "../components/partials/homepage/About";
import Jumbotron from "../components/partials/homepage/Jumbotron";
import Card from "../components/ui/Card";
import dataUser from "../services/dataUser";
import ScrollVelocity from "../components/partials/velocity/ScrollVelocity ";

const Homepage = () => {
  const { DataTravel } = dataUser();

  return (
    <>
      <Jumbotron />
      <div className="py-10 md:px-8">
        <About />
      </div>
      <div className="grid md:grid-cols-4 gap-8 md:px-8">
        {DataTravel.map((data) => (
          <Card
          key={data.id}
          price={data.price}
          tittle={data.tittle}
          image={data.image}
          avatar={data.avatar}
          href={data.id}
          />
          ))}
      </div>
<ScrollVelocity texts={["| Explore Destination, in Your Hands"]} className="md:bg-slate-50 md:text-slate-900 py-4 text-[45px]"/>
    </>
  );
};

export default Homepage;
