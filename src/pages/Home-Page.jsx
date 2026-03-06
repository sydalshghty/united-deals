import Header from "../components/header";
//import Header from "../components/header/Header";
import Banner from "../components/banners.jsx/banner";
import Freedelivery from "../components/freedelivery/freedelivery";
import TodaysDealsProducts from "../components/todays-deals-products/todays-deals-products";
import TopCategories from "../components/top-categories/top-categories";
import FeaturedProducts from "../components/featured-products/featured-products";
//import ShopWithCategories from "../components/shop-Categories/shop-categories";
import BestProducts from "../components/best-products/best-products";
import MacbookProBanner from "../components/macbook-pro/macbook-pro-banner";
import NewAppleBanner from "../components/new-apple-banners/new-apple-banner";
import FlashProducts from "../components/flash-Products/flash-products";
import LatestNews from "../components/latest-news/latest-news";
import EmailAddress from "../components/email-section/email-address";
import Footer from "../components/footer/footer";
function HomePage() {
    return (
        <>
            <Header />
            <div className="home-page-content mt-[150px]">
                <Banner />
                <Freedelivery />
                <TodaysDealsProducts/>
                <TopCategories/>
                <FeaturedProducts />
                <NewAppleBanner />
                <BestProducts />
                <MacbookProBanner />
                <FlashProducts />
                <LatestNews />
                <EmailAddress/>
                <Footer />
            </div>
        </>
    )
}
export default HomePage;