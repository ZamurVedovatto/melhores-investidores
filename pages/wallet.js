import { useState, useEffect } from "react";
import axios from "axios";

import MainHeadComponent from "./components/main-head";
import DashboardMain from "./components/wallet/dashboard-main";
import CarteiraMain from "./components/wallet/carteira-main";
import AtivosMain from "./components/wallet/ativos-main";

const Wallet = () => {
  const [stocks, setStocks] = useState([]);
  const [user, setUser] = useState({});
  const [page, setPage] = useState("dashboard");

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    getActivesData();
  }, []);

  const getUserData = async () => {
    await axios
      .get(`http://localhost:8000/user/5f4a9e5d7c89ead7c4c61b52`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  };

  const getActivesData = async () => {
    await axios.get(`http://localhost:8000/active`).then((res) => {
      setStocks(res.data);
    });
  };

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <section>
      <div>
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
                    <a onClick={(e) => onChangePage("dividendos")}>
                      Dividendos
                    </a>
                  </li>
                  <li>
                    <a onClick={(e) => onChangePage("simulador")}>Simulador</a>
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
          ></div>

          <div className="wallet-content">
            {(() => {
              switch (page) {
                case "dashboard":
                  return <DashboardMain user={user} />;
                case "carteira":
                  return <CarteiraMain />;
                default:
                  return (
                    <AtivosMain
                      getUserData={getUserData}
                      user={user}
                      stocks={stocks}
                    />
                  );
              }
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
