import dynamic from "next/dynamic";
const MainHeadComponent = dynamic(() => import("./main-head"));
const NavComponent = dynamic(() => import("./nav"));
const MainFooterComponent = dynamic(() => import("./footer/main-footer"));

export const siteTitle = "Melhores Investidores";

const Layout = (props) => {
  return (
    <>
      <MainHeadComponent />
      <section className="mobile_nav_class jl-has-sidebar">
        <div className="options_layout_wrapper jl_radius jl_none_box_styles jl_border_radiuss">
          <div
            className="options_layout_container full_layout_enable_front"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <NavComponent />
            {props.children}
            <MainFooterComponent />
          </div>
        </div>
        <div id="go-top">
          <a href="index.html#go-top">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Layout;
