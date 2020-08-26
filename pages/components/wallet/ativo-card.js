const { useState, useEffect } = require("react");
import useSWR from "swr";
const API_KEY = "CGS6AIUGH79BZT5V";

const AtivoCard = (props) => {
  const { stock } = props;

  return (
    <div>
      <div className="uk-card uk-card-default uk-card-body uk-card-hover">
        <h3 className="uk-card-title">{stock.code}</h3>
        <div className="uk-card-body">
          <table className="uk-table">
            <tbody>
              <tr>
                <td>
                  <a
                    onClick={(e) => onChangeAtivo("brsr6")}
                    type="button"
                    uk-toggle="target: #offcanvas-aporte"
                  >
                    Novo Aporte
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    onClick={(e) => onChangeAtivo("brsr6")}
                    type="button"
                    uk-toggle="target: #offcanvas-venda"
                  >
                    Nova Venda
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    onClick={(e) => onChangeAtivo("brsr6")}
                    type="button"
                    uk-toggle="target: #offcanvas-historico"
                  >
                    Histórico de Transações
                  </a>
                </td>
              </tr>
              <tr>
                <td>Cotas: 30</td>
              </tr>
              <tr>
                <td>Preço médio: R$14.83</td>
              </tr>
              <tr>
                <td>Cotação: R${stock.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AtivoCard;
