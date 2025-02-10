import Products from "../../assets/data/Product";
import MySlider from "../common/MySlider";
import ProductCard from "../common/ProductCard";
import SectionHeader from "../common/SectionHeader";

function NewArrivals() {
  const products = Products();
  return (
    <div className="w-full h-full">
      <div className=" w-full h-full px-4 xl:px-[100px] 2xl:px-[200px] md:px-6  flex flex-col items-center justify-center gap">
        <div className="w-full h-full justify-center items-center ">
          <SectionHeader>
            <span>New Arrivals </span>
          </SectionHeader>
        </div>

        <div className="w-full">
          <div className=" w-auto py-[40px] h-auto ">
            <MySlider arrows={true}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </MySlider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
