
import Products from "../../assets/data/Product"
import ProductCardWishlist from "./productCardWishlist";

const WishListProducts = () => {
    const products = Products();
  return (
    <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {
          products.map((product) => (
            <ProductCardWishlist key={product.id} product={product} />
          ))
            }
        </div>
    </div>
  )
}

export default WishListProducts
