import "./view-all-btn.css";
function ViewAllButton() {
    return (
        <>
            <button className="w-[129px] h-[48px]  bg-primary500 rounded-lg text-sm font-bold text-whiteColor view-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >VIEW ALL</button>
        </>
    )
}
export default ViewAllButton;