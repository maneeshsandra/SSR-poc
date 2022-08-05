import styles from './products.module.css'

function ProductList({ products }) {
  return(

    <div className={styles.productPage}>
        <div className={styles.cards}>
           {products.map(product=>{
            return(
    <div key={product.key} className="productcategory">
          <div className={styles.productcontent}>
            <div className={styles.productheading}>{product.name}</div>
            <div className={styles.productimageClass}>
              <img src={product.imageURL} alt="product" />
            </div>
            <div className={styles.productdescription}>{product.description}</div>
            <p>Available Quantity:{product.stock}</p>
            <div className={styles.productpriceCard}>
              <p>{`MRP Rs.${product.price}`}</p>
              <button className={styles.productexploreButton}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
            )
        })}
        </div>
        </div>
    )
}

export default ProductList;


