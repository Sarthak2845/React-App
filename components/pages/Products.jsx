import { useLoaderData } from "react-router";  

const Products = () => {
  const productData = useLoaderData();  
  return (
    <div>
      {productData.map((product) => (
        console.log(product),
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default Products;

export const productsLoader = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;  
};
