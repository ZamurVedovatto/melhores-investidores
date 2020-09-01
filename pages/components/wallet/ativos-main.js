import { useEffect, useState } from "react";
import axios from "axios";

import AtivoCardWallet from "./ativo-card-wallet";
import AtivoCardList from "./ativo-card-list";
import OffcanvasAporte from "./offcanvas-aporte";
import OffcanvasVenda from "./offcanvas-venda";
import OffcanvasHistorico from "./offcanvas-historico";
import OffcanvasAddAtivo from "./offcanvas-add-ativo";

const AtivosMain = (props) => {
  const { user, stocks } = props;
  const [selected, setSelected] = useState({});

  const reloadUserData = () => {
    props.getUserData();
  };

  const onChangeDivision = (e) => {
    let division = e.target.value;
    setSelected({ ...selected, division });
  };

  const onChangeSector = (e) => {
    let sector = e.target.value;
    setSelected({ ...selected, sector });
  };

  const onAddAtivo = async () => {
    await axios
      .put(`http://localhost:8000/user/5f4a9e5d7c89ead7c4c61b52/add-active`, {
        selected,
      })
      .then((res) => {
        reloadUserData();
        UIkit.offcanvas("#offcanvas-add-ativo").hide();
      });
  };

  const onUpdateUser = async (content) => {
    await axios
      .put(`http://localhost:8000/user/5f4a9e5d7c89ead7c4c61b52`, {
        content,
      })
      .then((res) => {
        reloadUserData();
        UIkit.offcanvas("#offcanvas-aporte").hide();
        UIkit.offcanvas("#offcanvas-venda").hide();
      });
  };

  const onSetNewActive = (active) => {
    setSelected(active);
    UIkit.offcanvas("#offcanvas-add-ativo").show();
  };

  const onOpenOffcanvasAporte = (active) => {
    setSelected(active);
    UIkit.offcanvas("#offcanvas-aporte").show();
  };

  const onAddContribution = (code, contribution) => {
    user.actives.map((active) => {
      if (active.code === code) {
        let patrimony = contribution.quotas * contribution.price;
        active.historic.push(contribution);
        active.patrimony += patrimony;
        active.quotas += contribution.quotas;
        active.averagePrice =
          (patrimony + contribution.brokerage) / contribution.quotas;
        console.log(active, contribution);
      }
    });
    onUpdateUser(user);
  };

  const onRemoveContribution = (code, contribution) => {
    user.actives.map((active) => {
      if (active.code === code) {
        let patrimony =
          contribution.quotas * contribution.price + contribution.brokerage;
        active.historic.push(contribution);
        active.patrimony -= patrimony;
        active.quotas -= contribution.quotas;
        active.averagePrice =
          (patrimony + contribution.brokerage) / contribution.quotas; //corrigir
        console.log(active, contribution);
      }
    });
    onUpdateUser(user);
  };

  const onOpenOffcanvasVenda = (active) => {
    setSelected(active);
    UIkit.offcanvas("#offcanvas-venda").show();
  };

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
              <AtivoCardWallet
                key={active.code}
                active={active}
                reloadUserData={reloadUserData}
                onOpenOffcanvasAporte={onOpenOffcanvasAporte}
                onOpenOffcanvasVenda={onOpenOffcanvasVenda}
              />
            ))}
        </div>
      </div>
      <div className="lista-ativos uk-card uk-card-default uk-card-body">
        <ul uk-accordion="multiple: true">
          {/* <li className="uk-open"> */}
          <li>
            <a className="uk-accordion-title" href="#">
              Adicionar Ação
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
                    reloadUserData={reloadUserData}
                    onSetNewActive={onSetNewActive}
                  />
                ))}
            </div>
          </li>

          <li style={{ marginTop: ".5rem" }}>
            <a className="uk-accordion-title" href="#">
              Adicionar FIIs
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
                    reloadUserData={reloadUserData}
                    onSetNewActive={onSetNewActive}
                  />
                ))}
            </div>
          </li>
        </ul>
      </div>

      <OffcanvasAddAtivo
        selected={selected}
        onAddAtivo={onAddAtivo}
        onChangeSector={onChangeSector}
        onChangeDivision={onChangeDivision}
      />
      <OffcanvasAporte
        onAddContribution={onAddContribution}
        selected={selected}
      />
      <OffcanvasVenda
        onRemoveContribution={onRemoveContribution}
        selected={selected}
      />
      <OffcanvasHistorico />
    </div>
  );
};

export default AtivosMain;
