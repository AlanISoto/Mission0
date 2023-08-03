import Card from "./Components/Card";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <div className="container mx-auto mt-8 flex flex-wrap justify-center space-x-7 p-5 m-5">
        <Card
          name={"Waygu Beef Sliders"}
          info={
            "House made wagyu beef & mushroom patties on mini sliders with red pepper pimento cheese, pickled onion & crispy lettuce"
          }
          img={"https://i.imgur.com/YZKgAFZ.jpg"}
        />
        <Card
          name={"Caprese Flat Bread"}
          info={
            "An appetizing medley of Mozzarella, juicy ripe tomatoes, and fresh basil, adorned with a delightful drizzle of olive oil, bringing together a harmonious symphony of Italian flavors."
          }
          img={"https://i.imgur.com/u7KrgFj.jpg"}
        />
        <Card
          name={"Venison Parcels"}
          info={
            "Exquisite venison parcels, expertly crafted to perfection, showcasing the rich and tender flavors of this premium meat, promising a delightful culinary experience"
          }
          img={"https://i.imgur.com/gCjTYLi.jpg"}
        />
        <Card
          name={"Pollo Frito"}
          info={
            "Savory strips of fried chicken served with a tantalizing smoky Jalapeño aioli, creating a delightful combination of crispy goodness and a spicy kick"
          }
          img={"https://i.imgur.com/TUWHhjB.jpg"}
        />
        <Card
          name={"Mango and White Chocolate Cheescake"}
          info={
            "Sumptuous mango-infused white chocolate cheesecake, topped with a luscious mango puree, offering a perfect blend of tropical sweetness and creamy indulgence"
          }
          img={"https://i.imgur.com/6dujXBr.jpg"}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
