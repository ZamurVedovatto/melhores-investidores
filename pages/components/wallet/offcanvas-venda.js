const OffcanvasVenda = (active) => {
  return (
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
  );
};

export default OffcanvasVenda;
