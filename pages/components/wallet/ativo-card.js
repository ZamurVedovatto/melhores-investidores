const AtivoCard = (props) => {
  const { stock } = props;

  const onChangeAtivo = (code) => {
    console.log(code);
  };

  const setStockVariation = (change) => {
    let variation = change;
    console.log(variation);
    if (change > 0) {
      return <span uk-icon="icon: triangle-up">{variation}%</span>;
    } else {
      return <span uk-icon="icon: triangle-down">{variation}%</span>;
    }
  };

  return (
    <div style={{ paddingLeft: ".5rem", marginTop: ".5rem" }}>
      <div className="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
        <div
          className="uk-card-header"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: ".25rem 0",
          }}
        >
          <h3 className="uk-card-title">{stock.code}</h3>
          <span>R${stock.price}</span>
          {setStockVariation(stock.change)}
        </div>
        <div
          className="uk-card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: ".25rem 0",
          }}
        >
          <span>Cotas: 30</span>
          <span>R$3.225,46</span>
        </div>
        <div className="uk-card-footer">
          <a
            onClick={(e) => onChangeAtivo("brsr6")}
            uk-toggle="target: #offcanvas-aporte"
            className="uk-button uk-button-text"
          >
            Aporte/Venda
          </a>
        </div>
      </div>
    </div>
  );
};

export default AtivoCard;
