import Header from "../components/header";
import Banner from "../components/banners.jsx/banner";
import Freedelivery from "../components/freedelivery/freedelivery";
import TodaysDealsProducts from "../components/todays-deals-products/todays-deals-products";
import TopCategories from "../components/top-categories/top-categories";
import TopElectronicsBrands from "../components/top-electronics-brands/top-electronics-brands";
import FeaturedProducts from "../components/featured-products/featured-products";
import NewAppleBanner from "../components/new-apple-banners/new-apple-banner";
//import FlashProducts from "../components/flash-Products/flash-products";
import BestProducts from "../components/best-products/best-products";
import EmailAddress from "../components/email-section/email-address";
import Footer from "../components/footer/footer";

function HomePage() {
    return (
        <>
            <Header />
            <div className="home-page-content mt-[150px]">
                <Banner />
                <Freedelivery />
                <TodaysDealsProducts />
                <TopCategories />
                <TopElectronicsBrands />
                <FeaturedProducts />
                <NewAppleBanner />
                <EmailAddress />
                <Footer />
            </div>
        </>
    )
}
export default HomePage;