const AtivoCardList = (props) => {
  const { stock } = props;

  const onAddActive = (active) => {
    console.log(active);
  };

  return (
    <div
      onClick={(e) => onAddActive(stock)}
      style={{ paddingLeft: ".5rem", marginTop: ".5rem" }}
    >
      <div className="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
        <h3 className="uk-card-title">{stock.code}</h3>
      </div>
    </div>
  );
};

export default AtivoCardList;
