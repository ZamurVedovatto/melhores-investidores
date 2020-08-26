import AtivoCard from "./ativo-card";

const AtivosMain = (props) => {
  const { stocks } = props;
  return (
    <div className="ativos-main-wrapper" style={{ margin: "1rem 2rem" }}>
      <div
        className="uk-child-width-1-1@s uk-child-width-1-4@m uk-child-width-1-6@l uk-text-center"
        uk-grid="true"
      >
        {stocks &&
          stocks.map((stock) => <AtivoCard key={stock.code} stock={stock} />)}
      </div>

      <div id="offcanvas-aporte" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          ></button>

          <h3>BRSR6</h3>

          <form>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Novo Aporte</legend>
              <div className="uk-margin">
                <input className="uk-input" type="date" placeholder="Data" />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Quantidade de Cotas"
                />
              </div>
              <div className="uk-margin">
                <input className="uk-input" type="text" placeholder="Preço" />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Corretagem + Taxas"
                />
              </div>
            </fieldset>
            <button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
              Salvar
            </button>
          </form>
        </div>
      </div>

      <div id="offcanvas-venda" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          ></button>

          <h3>BRSR6</h3>

          <form>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Nova Venda</legend>
              <div className="uk-margin">
                <input className="uk-input" type="date" placeholder="Data" />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Quantidade de Cotas"
                />
              </div>
              <div className="uk-margin">
                <input className="uk-input" type="text" placeholder="Preço" />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Corretagem + Taxas"
                />
              </div>
            </fieldset>
            <button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
              Salvar
            </button>
          </form>
        </div>
      </div>

      <div id="offcanvas-historico" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          ></button>

          <h3>BRSR6</h3>

          <form>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Histórico de transações</legend>
              <div className="uk-margin">
                <input className="uk-input" type="date" placeholder="Data" />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Quantidade de Cotas"
                />
              </div>
              <div className="uk-margin">
                <input className="uk-input" type="text" placeholder="Preço" />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Corretagem + Taxas"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AtivosMain;
