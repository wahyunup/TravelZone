import About from "../components/partials/homepage/About";
import Jumbotron from "../components/partials/homepage/Jumbotron";
import Card from "../components/ui/Card";
import HomepageLayout from "../layout/HomepageLayout";
import dataUser from "../services/dataUser";

const Homepage = () => {
  const { DataTravel } = dataUser();

  return (
    <>
      <Jumbotron />
        <div className="py-10 px-8">
          <About />
        </div>
        <div className="grid grid-cols-4 gap-8 px-8">
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
    </>
  );
};

export default Homepage;
