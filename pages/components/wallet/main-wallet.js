import dynamic from "next/dynamic";
import MainNav from "./main-nav";
import { useState } from "react";

const MainHeadComponent = dynamic(() => import("./../main-head"));

import AtivosMain from "./ativos-main";
import CarteiraMain from "./carteira-main";
import DashboardMain from "./dashboard-main";
import ModalAddActiveComponent from "./modal-add-active";

const MainWallet = (props) => {
  const { stocks } = props;
  const [page, setPage] = useState("dashboard");

  const onChangePage = (page) => {
    setPage(page);
  };

  const onOpenModalAddActive = () => {
    UIkit.modal("#modal-center").show();
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
        <div
          className="wallet-info"
          style={{
            maxWidth: "1240px",
            margin: "1rem auto",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "2rem", marginRight: "2rem" }}>
            Meus Ativos
          </span>
          <a
            className="uk-button"
            onClick={(e) => onOpenModalAddActive(e)}
            uk-toggle
            uk-icon="icon: plus-circle; ratio: 1.6"
          ></a>
        </div>
        <ModalAddActiveComponent />
        <div className="wallet-content">
          {(() => {
            switch (page) {
              case "dashboard":
                return <DashboardMain />;
              case "carteira":
                return <CarteiraMain />;
              default:
                return <AtivosMain stocks={stocks} />;
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default MainWallet;
