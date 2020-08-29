const AtivoCard = (props) => {
  const { active } = props;

  const onAddContribution = (active) => {
    console.log(active);
  };

  const onAddSell = (active) => {
    console.log(active);
  };

  return (
    <div>
      <div className="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
        <div
          className="uk-card-header"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: ".25rem 0",
          }}
        >
          <h3 className="uk-card-title">{active.code}</h3>
          <span>Preço atual: R${active.price}</span>
        </div>
        <div
          className="uk-card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: ".25rem 0",
          }}
        >
          <span>Cotas: {active.quotas}</span>
          <span>Patrimônio: R${active.totalValue}</span>
        </div>
        <div
          className="uk-card-footer"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <a
            onClick={(e) => onAddContribution(active)}
            uk-toggle="target: #offcanvas-aporte"
            className="uk-button uk-button-text"
            style={{ marginBottom: ".5rem" }}
          >
            Aporte
          </a>
          <a
            onClick={(e) => onAddSell(active)}
            uk-toggle="target: #offcanvas-aporte"
            className="uk-button uk-button-text"
          >
            Venda
          </a>
        </div>
      </div>
    </div>
  );
};

export default AtivoCard;
