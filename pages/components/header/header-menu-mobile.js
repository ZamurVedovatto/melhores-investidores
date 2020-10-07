import React from 'react';
import Link from "next/Link";

const HeaderMenuMobile = () => {
  return (
    <div id="content_nav" className="jl_mobile_nav_wrapper">
      <div id="nav" className="jl_mobile_nav_inner">
        <div className="menu_mobile_icons mobile_close_icons closed_menu">
          <span className="jl_close_wapper">
            <span className="jl_close_1"></span>
            <span className="jl_close_2"></span>
          </span>
        </div>
        <ul id="mobile_menu_slide" className="menu_moble_slide">
          <li className="menu-item">
            <Link href="/artigos">
              <a>
                Artigos<span className="border-menu"></span>
              </a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/dicionario-do-investidor">
              <a>
                Dicionário<span className="border-menu"></span>
              </a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/literatura">
              <a>
                Literatura<span className="border-menu"></span>
              </a>
            </Link>
          </li>
          <li className="menu-item only-desktop">
            <Link href="/simuladores">
              <a>
                Simuladores<span className="border-menu"></span>
              </a>
            </Link>
          </li>
        </ul>
        <span className="jl_none_space"></span>
        <div id="disto_about_us_widget-2" className="widget jellywp_about_us_widget">
          <div className="widget_jl_wrapper about_widget_content">
            <div className="jellywp_about_us_widget_wrapper">
              <div className="social_icons_widget">
                <ul className="social-icons-list-widget icons_about_widget_display">
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
              </div>
            </div> <span className="jl_none_space"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenuMobile;