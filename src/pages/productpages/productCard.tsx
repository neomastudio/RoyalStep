import { useState } from "react";
import { type product } from "../../slice/productsSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cartSlice";

interface productCardProps {
  product: product;
}

function ProductCard({ product }: productCardProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const dispatch = useDispatch();
  const savedCarts = localStorage.getItem("cart");
  const cart = savedCarts ? JSON.parse(savedCarts) : [];

  const handleAddToCart = () => {
    if (selectedColor === null && selectedSize === null) {
      toast.error("Please select a color and size.");
      return;
    }
    if (selectedColor === null) {
      toast.warning("Please select a color.");
      return;
    }
    if (selectedSize === null) {
      toast.warning("Please select a size.");
      return;
    }
    if (selectedColor != null || selectedSize != null) {
      toast.success("Added to cart!.");
      const cartItem = {
        id: product.id,
        title: product.title,
        img: product.img,
        color: selectedColor,
        size: selectedSize,
        price: product.price,
        stock: product.stock,
        quantity: 1,
      };
      dispatch(addToCart(cartItem));
      cart.push(cartItem);
      localStorage.setItem("cart",JSON.stringify(cart));
    }
  };

  return (
    <>
      <div className="cardsPro" key={product.id}>
        <div className="img-pro">
          <img src={product.img} />
        </div>
        <div className="title-pro">
          <h3>{product.title}</h3>
        </div>
        <div className="color-pro">
          <h5>Select Color :</h5>
          <div className="colorBox">
            {product.colors.map((color) => (
              <span
                style={{ backgroundColor: color }}
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`${selectedColor === color ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>
        <div className="size-pro">
          <h5>Select Size :</h5>
          <div className="sizeBox">
            {product.sizes.map((size) => (
              <li
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`${selectedSize === size ? "active" : ""}`}
              >
                {size}
              </li>
            ))}
          </div>
        </div>
        <div className="stock-pro">
          <h5>Stock :</h5>
          <h6>{product.stock}</h6>
        </div>
        <div className="price-pro">
          <h5>Price :</h5>
          <h6>{product.price}$</h6>
        </div>
        <input
          type="button"
          value="Add to Cart"
          className="buyBtn"
          onClick={handleAddToCart}
        />
      </div>
    </>
  );
}

export default ProductCard;
