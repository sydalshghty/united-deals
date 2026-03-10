import Header from "../components/header";
import NavLinksProduct from "../components/product-page-content/nav-links-product";
import ProductInformation from "../components/product-page-content/product-information";
import FrequentlyProducts from "../components/product-page-content/frequently-products";
import TopElectronicsBrands from "../components/top-electronics-brands/top-electronics-brands";
import Footer from "../components/footer/footer";
function ProductPage() {
    return (
        <>
            <Header />
            <div className="product-page-content mt-[150px]">
                <NavLinksProduct />
                <ProductInformation />
                <FrequentlyProducts />
                <TopElectronicsBrands />
                <Footer />
            </div>
        </>
    )
}
export default ProductPage;