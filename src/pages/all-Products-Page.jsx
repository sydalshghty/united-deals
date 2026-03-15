import Header from "../components/header";
import NavLinksProduct from "../components/product-page-content/nav-links-product";
import AllProducts from "../components/all-products-page-content/all-products";
import Footer from "../components/footer/footer";
function AllProductsPage() {
    return (
        <>
            <Header />
            <div className="all-products-page mt-[150px]">
                <NavLinksProduct />
                <AllProducts />
            </div>
            <Footer />
        </>
    )
}
export default AllProductsPage;