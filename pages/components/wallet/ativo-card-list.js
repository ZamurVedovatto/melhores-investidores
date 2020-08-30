import axios from "axios";

const AtivoCardList = (props) => {
  const { stock } = props;

  const onClickAddAtivo = async () => {
    let newActive = { code: stock.code };
    await axios
      .put(`http://localhost:8000/user/5f4a9e5d7c89ead7c4c61b52/add-active`, {
        newActive,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    reloadUserData();
  };

  const reloadUserData = () => {
    props.reloadUserData();
  };

  return (
    <div
      style={{ paddingLeft: ".5rem", marginTop: ".5rem" }}
      onClick={(e) => onClickAddAtivo()}
    >
      <div className="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
        <h3 className="uk-card-title">{stock.code}</h3>
      </div>
    </div>
  );
};

export default AtivoCardList;
