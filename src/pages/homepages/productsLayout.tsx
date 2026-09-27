import React, { useEffect, useRef, useState } from "react";
import { selectProduct, type product } from "../../slice/productsSlice";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

interface ProductsLayoutProps {
  category: {
    id: string;
    title: string;
  };
  product: product[];
}

function ProductsLayout({ category, product }: ProductsLayoutProps) {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const leftIndex = (activeIndex - 1 + product.length) % product.length;
  // const rightIndex = (activeIndex + 1) % product.length;
  // const farLeftIndex = (activeIndex - 2 + product.length) % product.length;
  // const farRightIndex = (activeIndex + 2) % product.length;

  // const centerProduct = product[activeIndex];
  // const leftProduct = product[leftIndex];
  // const farLeftProduct = product[farLeftIndex];
  // const rightProduct = product[rightIndex];
  // const farRightProduct = product[farRightIndex];

  const productRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const isMobile = window.innerWidth < 768;
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;

    const distance = touchEndX - touchStartX.current;

    if (distance > 30) {
      handlePrev();
    }

    if (distance < -30) {
      handleNext();
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % product.length;
      return next;
    });
  };
  const handlePrev = () => {
    setActiveIndex((prev) => {
      const Prev = (prev - 1) % product.length;
      return Prev;
    });
  };

  useEffect(() => {
    const checkPosition = () => {
      if (!productRef.current) return;

      const rect = productRef.current.getBoundingClientRect();
      const centerCarousel = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;
      const distanceFromScreenCenter = Math.abs(centerCarousel - screenCenter);
      //console.log(distanceFromScreenCenter);

      if (distanceFromScreenCenter < 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    checkPosition();

    window.addEventListener("scroll", checkPosition);

    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  useEffect(() => {
    if (!isActive || isHover || isMobile) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [isActive, isHover, product.length]);

  function getPositionClass(distance: number) {
    switch (distance) {
      case 0:
        return "centerPic";
      case 1:
        return "rightPic";
      case -1:
        return "leftPic";
      case 2:
        return "farRightPic";
      case -2:
        return "farLeftPic";
      default:
        return "hiddenPic";
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!productRef.current) return;

    const rect = productRef.current.getBoundingClientRect();

    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };
  const handleMouseEnter = () => {
    setCursorPos((prev) => ({ ...prev, visible: true }));
  };
  const handleMouseLeave = () => {
    setCursorPos((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <div id="proLayout">
        <div
          className="proLayout"
          ref={productRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            setIsHover(true);
            handleMouseEnter();
          }}
          onMouseLeave={() => {
            setIsHover(false);
            handleMouseLeave();
          }}
        >
          <div
            className={`cursorRing ${cursorPos.visible ? "show" : ""}`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          ></div>
          <div className="headCarousel">
            <h3>{category.title}</h3>
            <Link
              to={`/products/${category.id}`}
              onClick={() => dispatch(selectProduct(category.id))}
            >
              View All
            </Link>
          </div>
          <div className="carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {product.map((item, index) => {
              let distance = index - activeIndex;
              if (distance > product.length / 2) {
                distance = distance - product.length;
              }

              if (distance < -product.length / 2) {
                distance = distance + product.length;
              }
              return (
                <img
                  key={item.id}
                  src={item.img}
                  className={getPositionClass(distance)}
                />
              );
            })}
            <i
              className={`bi bi-chevron-left ${isHover ? "show" : ""}`}
              onClick={handlePrev}
            ></i>
            <i
              className={`bi bi-chevron-right ${isHover ? "show" : ""}`}
              onClick={handleNext}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsLayout;
