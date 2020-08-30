const OffcanvasAddAtivo = (props) => {
  const { selected } = props;

  const onAddAtivo = () => {
    props.onAddAtivo();
  };

  const onChangeSector = (e) => {
    props.onChangeSector(e);
  };

  const onChangeDivision = (e) => {
    props.onChangeDivision(e);
  };

  return (
    <div id="offcanvas-add-ativo" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>

        <h3>{selected.code}</h3>

        <form>
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Adicionar Ativo</legend>
            <div className="uk-margin">
              <select
                onChange={(e) => onChangeDivision(e)}
                className="uk-select"
              >
                <option value="dividendos">Dividendos</option>
                <option value="valorizacao">Valorização</option>
                <option value="pimentinha">Pimentinha</option>
              </select>
            </div>

            <div className="uk-margin">
              <select onChange={(e) => onChangeSector(e)} className="uk-select">
                <option value="banco">Banco</option>
                <option value="aereo">Aéreo</option>
                <option value="energia">Energia</option>
                <option value="saneamento">Saneamento</option>
                <option value="seguros">Seguros</option>
                <option value="industria">Indústria</option>
                <option value="varejo">Varejo</option>
                <option value="commodities">Commodities</option>
                <option value="farmaceutico">Farmaceutico</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="imoveis">Imóveis</option>
                <option value="locadora">Locadora</option>
                <option value="distribuidora">Distribuidora</option>
              </select>
            </div>
          </fieldset>
          <a
            className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
            onClick={() => onAddAtivo()}
          >
            Adicionar à Carteira
          </a>
        </form>
      </div>
    </div>
  );
};

export default OffcanvasAddAtivo;
