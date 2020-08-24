import dynamic from "next/dynamic";
import MainNav from "./main-nav";
import { useState } from "react";

const MainHeadComponent = dynamic(() => import("./../main-head"));

import AtivosMain from "./ativos-main";
import CarteiraMain from "./carteira-main";
import DashboardMain from "./dashboard-main";

const MainWallet = (props) => {
  const [page, setPage] = useState("dashboard");

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <MainHeadComponent />
      <div className="wallet-wrapper">
        <div className="wallet-nav">
          <nav
            className="uk-navbar-container uk-margin"
            uk-navbar="mode: click"
          >
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <a onClick={(e) => onChangePage("dashboard")}>Dashboard</a>
                </li>
                <li>
                  <a onClick={(e) => onChangePage("carteira")}>Carteira</a>
                </li>
                <li>
                  <a onClick={(e) => onChangePage("ativos")}>Ativos</a>
                </li>
                <li>
                  <a onClick={(e) => onChangePage("metas")}>Metas</a>
                </li>
                <li>
                  <a onClick={(e) => onChangePage("dividendos")}>Dividendos</a>
                </li>
                <li>
                  <a onClick={(e) => onChangePage("projecoes")}>
                    Projeções/Cálculos
                  </a>
                </li>
                <li>
                  <a onClick={(e) => onChangePage("perfil")}>Perfil</a>
                </li>
                <li>
                  <a onClick={(e) => onChangePage("configuracoes")}>
                    Configurações
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="wallet-content">
          {(() => {
            switch (page) {
              case "dashboard":
                return <DashboardMain />;
              case "carteira":
                return <CarteiraMain />;
              default:
                return <AtivosMain />;
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default MainWallet;
