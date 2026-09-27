import { NavLink, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { selectProduct } from "../slice/productsSlice";

function Navbar() {
  
  const location = useLocation();
  const path = location.pathname;
  const openLink = path.startsWith("/products");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const navbar = e.currentTarget;
    const rect = navbar.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    navbar.style.setProperty("--mouse-x", `${x}px`);
    navbar.style.setProperty("--mouse-y", `${y}px`);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isDropdownOpen && productsRef.current) {
      const rect = productsRef.current.getBoundingClientRect();

      setDropdownPos({
        top: rect.bottom + 6 + window.scrollY,
        left: rect.left + window.scrollX,
      });
      // console.log("dropdown open:", isDropdownOpen);
      // console.log("ref:", productsRef.current);
      // console.log("rect:", productsRef.current?.getBoundingClientRect());
    }
  }, [isDropdownOpen]);

  const dispatch = useDispatch();

  return (
    <>
      <div className="sec-navbar">
        <div className="navbar" onMouseMove={handleMouseMove}>
          <h1 className="hdNav">RoyalStep</h1>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={() => {
              setIsDropdownOpen(false);
            }}
          >
            {" "}
            Profile{" "}
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={() => {
              setIsDropdownOpen(false);
            }}
          >
            {" "}
            Home{" "}
          </NavLink>

          <div
            className={`
                menu-item 
                ${openLink ? "active" : ""}
              `}
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
            style={{ cursor: "pointer" }}
            ref={productsRef}
          >
            Products
          </div>
          {isDropdownOpen &&
            createPortal(
              <div
                style={{
                  position: "absolute",
                  top: `${dropdownPos.top}px`,
                  left: `${dropdownPos.left}px`,
                  zIndex: 9999,
                  overflow: "hidden",
                }}
                className="parenMenu"
              >
                <div className="menu">
                  <NavLink
                    to="/products/sneakers"
                    onClick={() => {
                      (setIsDropdownOpen(!isDropdownOpen),
                        dispatch(selectProduct("sneakers")));
                    }}
                  >
                    Sneakers
                  </NavLink>
                  <NavLink
                    to="/products/formal"
                    onClick={() => {
                      (setIsDropdownOpen(!isDropdownOpen),
                        dispatch(selectProduct("formal")));
                    }}
                  >
                    Formal
                  </NavLink>
                  <NavLink
                    to="/products/hiking"
                    onClick={() => {
                      (setIsDropdownOpen(!isDropdownOpen),
                        dispatch(selectProduct("hiking")));
                    }}
                  >
                    Hiking
                  </NavLink>
                  <NavLink
                    to="/products/kids"
                    onClick={() => {
                      (setIsDropdownOpen(!isDropdownOpen),
                        dispatch(selectProduct("kids")));
                    }}
                  >
                    Kids
                  </NavLink>
                  <NavLink
                    to="/products/sandals"
                    onClick={() => {
                      (setIsDropdownOpen(!isDropdownOpen),
                        dispatch(selectProduct("sandals")));
                    }}
                  >
                    Sandal
                  </NavLink>
                  <NavLink
                    to="/products/boots"
                    onClick={() => {
                      (setIsDropdownOpen(!isDropdownOpen),
                        dispatch(selectProduct("boots")));
                    }}
                  >
                    Boot
                  </NavLink>
                </div>
              </div>,
              document.body,
            )}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={() => {
              setIsDropdownOpen(false);
            }}
          >
            {" "}
            Cart{" "}
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={() => {
              setIsDropdownOpen(false);
            }}
          >
            {" "}
            Orders{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
