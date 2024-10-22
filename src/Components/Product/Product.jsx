 

const Product = ({ products, handleAddToCArt }) => {
    const {id, name, price, inStock, image, isFeatured} = products;
    
    return (
        <div className="card bg-base-100 shadow-xl max-w-xs">
            <figure className="px-10 pt-10">
              <img
                src={image}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <h2>Price: ${price}</h2>
              <p>inStock: {inStock}</p>
              <p>{ isFeatured ? 'Featured Product' : 'Not Featured' }</p>
              <div className="card-actions">
                <button onClick={() => handleAddToCArt(products, price)} className="btn btn-primary">Add to cart</button>
              </div>
            </div>
        </div>
    );
};

export default Product;