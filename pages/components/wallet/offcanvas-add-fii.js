const OffcanvasAddFii = (props) => {
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
    <div id="offcanvas-add-fii" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>

        <h3>{selected.code}</h3>

        <form>
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Adicionar FII</legend>
            <div className="uk-margin">
              <select
                onChange={(e) => onChangeDivision(e)}
                className="uk-select"
              >
                <option value="dividendos">Dividendos</option>
                <option value="valorizacao">Valorização</option>
              </select>
            </div>

            <div className="uk-margin">
              <select onChange={(e) => onChangeSector(e)} className="uk-select">
                <option value="papel">Papel</option>
                <option value="lajes">Lajes</option>
                <option value="shopping">Shopping</option>
                <option value="papel">Papel</option>
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

export default OffcanvasAddFii;
