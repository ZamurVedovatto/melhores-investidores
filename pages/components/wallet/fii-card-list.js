const FiiCardList = (props) => {
  const { fii } = props;

  const onSetNewFii = (fii) => {
    props.onSetNewFii(fii);
  };

  return (
    <>
      <div
        style={{ paddingLeft: ".5rem", marginTop: ".5rem" }}
        onClick={(e) => onSetNewFii(fii)}
      >
        <div className="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
          <h3 className="uk-card-title">{fii.code}</h3>
        </div>
      </div>
    </>
  );
};

export default FiiCardList;
