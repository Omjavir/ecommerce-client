import Category from "./components/Category";
import Navbar from "./components/Navbar";
import ProductsComponent from "./components/ProductsComponent";

const App = () => {
  return (
    <div className="">
      <div className="border-y-2">
        <Navbar />
      </div>
      <div className="">
        <div className="border-b-2">
          <Category />
        </div>
        <div>
          <ProductsComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
