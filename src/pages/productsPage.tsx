import "../styles/productsPage.css";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import ProductCard from "./productpages/productCard";
import EmptySection from "./emptysection";
import ButtonBack from "./buttonBack";

function ProductsPage() {
  const { items, selectedItem } = useSelector(
    (state: RootState) => state.products,
  );
  const filteredProducts = items.filter(
    (item) => item.category === selectedItem,
  );

  return (
    <>
      {items.length > 1 ? (
        <div className="filterContainer">
          {filteredProducts.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>
      ) : (
        <EmptySection />
      )}
      <ButtonBack/>
    </>
  );
}

export default ProductsPage;
