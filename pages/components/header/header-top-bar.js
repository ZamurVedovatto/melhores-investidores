import Link from "next/Link";

const HeaderTopBar = () => {
  return (
    <div className="header_main_wrapper header_style_cus5_opt">
      <div className="container jl_header_5container">
        <div className="row header-main-position">
          <div className="col-md-12 logo-position-top">
            <div className="logo_position_wrapper">
              <div className="logo_position_table">
                <ul className="social_icon_header personal_header_layout">
                  <li>
                    <a
                      className="google_plus"
                      href="https://www.instagram.com/melhoresinvestidores/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="behance"
                      href="https://melhoresinvestidores.tumblr.com/"
                      target="_blank"
                    >
                      <i className="fa fa-tumblr"></i>
                    </a>
                  </li>
                </ul>
                <Link href="/">
                  <a className="logo_link">
                    <img
                      className="logo_black"
                      src="/img/logo/logomi.png"
                      alt="Logotipo Melhores Investidores"
                    />
                  </a>
                </Link>
                <div className="jl_header_link_subscribe">
                  <div className="search_header_menu jl_menu_bottom">
                    <div className="menu_mobile_icons">
                      <i className="fa fa-bars"></i>
                    </div>
                  </div>
                  {/* <div className="search_header_wrapper jl_menu_search search_form_menu_personal_click"><i className="fa fa-search"></i>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
