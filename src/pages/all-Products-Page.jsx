import Header from "../components/header";
import NavLinksProduct from "../components/product-page-content/nav-links-product";
import AllProducts from "../components/all-products-page-content/all-products";
function AllProductsPage() {
    return (
        <>
            <Header />
            <div className="all-products-page mt-[150px]">
                <NavLinksProduct />
                <AllProducts />
            </div>
        </>
    )
}
export default AllProductsPage;