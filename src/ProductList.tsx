import ProductCard from "./components/ProductCard";
import useCustomQuery from "./hooks/useCustomQuery";
import { IProduct } from "./interface/index";

const ProductList = () => {
  const { isLoading, data } = useCustomQuery({
    queryKey: ["productList"],
    url: `/products?limit=10&select=title,price,thumbnail`,
  });

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data.products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
