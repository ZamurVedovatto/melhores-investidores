import { useState } from "react";

const OffcanvasVenda = (props) => {
  const { selected } = props;
  const [date, setDate] = useState(new Date());
  const [quotas, setQuotas] = useState(0);
  const [price, setPrice] = useState(0);
  const [brokerage, setBrokerage] = useState(0);

  const onRemoveAporte = () => {
    let contribution = {
      type: "venda",
      date,
      quotas: Number(quotas),
      price: Number(price),
      brokerage: Number(brokerage),
    };
    props.onRemoveContribution(selected.code, contribution);
  };

  return (
    <div id="offcanvas-venda" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>

        <h3>{selected.code}</h3>

        <form>
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Venda</legend>
            <div className="uk-margin">
              <input
                className="uk-input"
                type="date"
                placeholder="Data"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input"
                type="number"
                placeholder="Quantidade de Cotas"
                onChange={(e) => setQuotas(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input"
                type="number"
                placeholder="Preço"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input"
                type="number"
                placeholder="Corretagem + Taxas"
                onChange={(e) => setBrokerage(e.target.value)}
              />
            </div>
          </fieldset>
          <a
            className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
            onClick={(e) => onRemoveAporte()}
          >
            Salvar
          </a>
        </form>
      </div>
    </div>
  );
};

export default OffcanvasVenda;
