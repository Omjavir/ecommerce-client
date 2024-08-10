import axios from "axios";

export class ProductsService {
  async getAllProducts() {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/product`);
      //   console.log(data);
      return data;
    } catch (error) {
      console.log("ERROR => ", error);
    }
  }

  async getProductsByCategory(id: string) {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/product/category/${id}`
      );
      console.log("Data ==.> ", data);
      return data;
    } catch (error) {
      console.log("ERROR => ", error);
    }
  }
}

const productService = new ProductsService();

export default productService;
