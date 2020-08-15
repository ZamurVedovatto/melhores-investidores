import dynamic from "next/dynamic";

const HeaderTopBarComponent = dynamic(() => import("./header-top-bar"));
const HeaderMainMenuComponent = dynamic(() => import("./header-main-menu"));
const HeaderMenuMobileComponent = dynamic(() => import("./header-menu-mobile"));

const MainHeader = () => {
  return (
    <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style5_custom headcus5_custom">
      <HeaderTopBarComponent />
      <HeaderMainMenuComponent />
      <HeaderMenuMobileComponent />
    </header>
  );
};

export default MainHeader;
