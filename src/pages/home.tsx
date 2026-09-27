import { useSelector } from "react-redux";
import "../styles/home.css";
import IconSectionHome from "./homepages/iconSec";
import type { RootState } from "../store/store";
import ProductsLayout from "./homepages/productsLayout";
import EmptySection from "./emptysection";
import Hero from "./homepages/hero";
import Footer from "./homepages/footer";
import FeaturedBanner from "./homepages/featuredBanner";
import QuestionSec from "./homepages/questionSec";

function Home() {
  const items = useSelector((state: RootState) => state.products.items);

  const categoriesToShow: {
    id: string;
    title: string;
  }[] = [
    { id: "sneakers", title: "Sneakers Collection" },
    { id: "formal", title: "Formal Collection" },
    { id: "hiking", title: "Adventure Collection" },
    { id: "kids", title: "Kids Collection" },
    { id: "sandals", title: "Summer Collection" },
    { id: "boots", title: "Boots Collection" },
  ];

  const hasEmptyCategory = categoriesToShow.some((cat) => {
    const filterItem = items.filter((item) => item.category === cat.id);
    return filterItem.length === 0;
  });

  return (
    <>
      <div id="home">
        <Hero />
        <IconSectionHome />
        {hasEmptyCategory ? (
          <EmptySection />
        ) : (
          categoriesToShow.map((cat, index) => {
            const filterItem = items.filter((item) => item.category === cat.id);
            return (
              <>
                <ProductsLayout
                  key={cat.id}
                  category={cat}
                  product={filterItem}
                />
                { index === 2 && <FeaturedBanner/> }
              </>
            );
          })
        )}
        <QuestionSec />
        <Footer />
      </div>
    </>
  );
}

export default Home;
