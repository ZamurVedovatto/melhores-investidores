const FooterBottom = () => {
  return (
    <div className="footer-bottom enable_footer_copyright_dark">
      <div className="container">
          <div className="row bottom_footer_menu_text">
            <div className="col-md-6 footer-left-copyright">© Copyright 2020 Zamur. Todos os direitos reservados</div>
            <div className="col-md-6 footer-menu-bottom">
                <ul id="menu-footer-menu" className="menu-footer">
                  <li className="menu-item menu-item-10"><a href="index.html#">Sobre nós</a>
                  </li>
                  <li className="menu-item menu-item-11"><a href="index.html#">Política de Privacidade</a>
                  </li>
                  <li className="menu-item menu-item-12"><a href="index.html#">Termos de Utilização</a>
                  </li>
                </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FooterBottom;