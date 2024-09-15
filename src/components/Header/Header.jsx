import "./Header.less";

function Header({data}) {
    const {handleHeaderClick, activeItemID} = data;
    return (
        <div className="header-container">
            <button type="button" onClick={handleHeaderClick}>
                <span className={!!activeItemID ? "close" : "hamburger"}></span>
            </button>
        </div>
    )
}

export default Header;