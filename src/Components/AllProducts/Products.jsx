import { useEffect, useState } from "react";
import Product from "../Product/Product";

 

const Products = ({handleAddToCArt}) => {

    //console.log(handleAddToCArt)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./shopping.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 place-items-center">
            {
                products.map((product, index) => <Product key={index} products={product} handleAddToCArt={handleAddToCArt}></Product>)
            }
        </div>
    );
};

export default Products;