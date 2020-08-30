const AtivoCardList = (props) => {
  const { stock } = props;

  const onSetNewActive = (active) => {
    props.onSetNewActive(active);
  };

  return (
    <>
      <div
        style={{ paddingLeft: ".5rem", marginTop: ".5rem" }}
        onClick={(e) => onSetNewActive(stock)}
      >
        <div className="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
          <h3 className="uk-card-title">{stock.code}</h3>
        </div>
      </div>
    </>
  );
};

export default AtivoCardList;
