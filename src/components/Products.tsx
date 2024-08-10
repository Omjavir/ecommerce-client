import Card from "./Card";

const Products = ({ products }: { products: [] }) => {
  // console.log("PRODUCTS => ", products);

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product._id} className="w-[25%]">
          <Card
            name={product.name}
            price={product.price}
            imgUrl={product.image.url}
            category={product.category[0].name}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
