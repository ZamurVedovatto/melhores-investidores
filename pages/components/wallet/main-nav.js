const MainNav = () => {
  return (
    <>
      <div className="wallet-nav">
        <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Carteira</a>
              </li>
              <li>
                <a href="#">Ativos</a>
              </li>
              <li>
                <a href="#">Metas</a>
              </li>
              <li>
                <a href="#">Dividendos</a>
              </li>
              <li>
                <a href="#">Projeções/Cálculos</a>
              </li>
              <li>
                <a href="#">Perfil</a>
              </li>
              <li>
                <a href="#">Configurações</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MainNav;
