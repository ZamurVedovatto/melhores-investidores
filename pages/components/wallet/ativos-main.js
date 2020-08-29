import AtivoCardWallet from "./ativo-card-wallet";
import AtivoCardList from "./ativo-card-list";

import { useEffect, useState } from "react";
import OffcanvasAporte from "./offcanvas-aporte";
import OffcanvasVenda from "./offcanvas-venda";
import OffcanvasHistorico from "./offcanvas-historico";

const AtivosMain = (props) => {
  const { user, stocks } = props;
  const [selectedActive, setSelectedActive] = useState({});

  return (
    <div
      className="ativos-main-wrapper"
      style={{ maxWidth: "1240px", margin: "1rem auto" }}
    >
      <div
        className="meus-ativos uk-card uk-card-default uk-card-body"
        style={{ marginBottom: "1rem" }}
      >
        <h3 className="uk-card-title">Meus Ativos</h3>
        <div
          className="uk-card-body uk-accordion-content uk-child-width-1-1@s uk-child-width-1-4@m uk-child-width-1-4@l uk-text-center"
          uk-grid="true"
        >
          {user &&
            user.actives &&
            user.actives.map((active) => (
              <AtivoCardWallet key={active.code} active={active} />
            ))}
        </div>
      </div>
      <div className="lista-ativos uk-card uk-card-default uk-card-body">
        <ul uk-accordion="multiple: true">
          <li className="uk-open">
            <a className="uk-accordion-title" href="#">
              Adicionar Ativo
            </a>
            <div
              className="uk-card-body uk-accordion-content uk-child-width-1-1@s uk-child-width-1-4@m uk-child-width-1-6@l uk-text-center"
              uk-grid="true"
            >
              <nav className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-left">
                  <div className="uk-navbar-item">
                    <form className="uk-search uk-search-navbar">
                      <span uk-search-icon="true"></span>
                      <input
                        className="uk-search-input"
                        type="search"
                        placeholder="Buscar..."
                      />
                    </form>
                  </div>
                </div>
              </nav>
              {stocks &&
                stocks.map((stock) => (
                  <AtivoCardList
                    key={stock.code}
                    stock={stock}
                    selectedActive={selectedActive}
                  />
                ))}
            </div>
          </li>
        </ul>
      </div>

      <OffcanvasAporte active={selectedActive} />
      <OffcanvasVenda active={selectedActive} />
      <OffcanvasHistorico active={selectedActive} />
    </div>
  );
};

export default AtivosMain;
