const { useState, useEffect } = require("react");
import useSWR from "swr";
const API_KEY = "CGS6AIUGH79BZT5V";

const AtivoCard = (props) => {
  const { stock } = props;
  const [ativo, setAtivo] = useState({});

  const onChangeAtivo = (ativo) => {
    console.log(ativo);
  };

  useEffect(async () => {
    const data = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}.SAO&apikey=${API_KEY}`
    );
    const stocks = await data.json();
    var values = Object.keys(stocks).map(function (key) {
      return stocks[key];
    });
    console.log(values);
    let code = stocks["Global Quote"]["01. symbol"].replace(".SAO", "");
    let price = stocks["Global Quote"]["05. price"];
    let prevClose = stocks["Global Quote"]["08. previous close"];
    let change = stocks["Global Quote"]["10. change percent"];
    let ativo = {
      code,
      price,
      prevClose,
      change,
    };
    setAtivo(ativo);
  }, []);

  return (
    <div>
      <div className="uk-card uk-card-default uk-card-body uk-card-hover">
        <h3 className="uk-card-title">{ativo.code}</h3>
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
                <td>Cotação: R${ativo.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AtivoCard;
