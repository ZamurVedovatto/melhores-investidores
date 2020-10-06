import dynamic from "next/dynamic";
const MainHeaderComponent = dynamic(() => import("./header/main-header"));

const Nav = () => {
  return (
    <>
      <MainHeaderComponent />
      <div className="search_form_menu_personal">
        <div className="menu_mobile_large_close">
          <span className="jl_close_wapper search_form_menu_personal_click">
            <span className="jl_close_1"></span>
            <span className="jl_close_2"></span>
          </span>
        </div>
        {/* <form method="get" className="searchform_theme" action="index.html#">
          <input
            type="text"
            placeholder="Buscar..."
            value=""
            name="s"
            className="search_btn"
          />
          <button type="submit" className="button">
            <i className="fa fa-search"></i>
          </button>
        </form> */}
      </div>
      <div className="mobile_menu_overlay"></div>
    </>
  );
};

export default Nav;
