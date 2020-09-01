import axios from "axios";

const AtivoCard = (props) => {
  const { active } = props;

  const onOpenOffcanvasAporte = () => {
    props.onOpenOffcanvasAporte(active);
  };

  const onOpenOffcanvasVenda = () => {
    props.onOpenOffcanvasVenda(active);
  };

  const onAddSell = () => {
    console.log(active);
  };

  const onRemoveActive = async () => {
    let selected = active;
    await axios
      .put(
        `http://localhost:8000/user/5f4a9e5d7c89ead7c4c61b52/remove-active`,
        {
          selected,
        }
      )
      .then((res) => {
        reloadUserData();
      });
  };

  const reloadUserData = () => {
    props.reloadUserData();
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
          <span>Nome da Empresa</span>
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
          <span>Patrimônio: R${active.patrimony}</span>
        </div>
        <div
          className="uk-card-footer"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <a
            onClick={(e) => onOpenOffcanvasAporte(active)}
            uk-toggle="target: #offcanvas-aporte"
            className="uk-button uk-button-text"
          >
            Aporte
          </a>
          <a
            onClick={(e) => onOpenOffcanvasVenda(active)}
            uk-toggle="target: #offcanvas-aporte"
            className="uk-button uk-button-text"
            style={{ margin: ".5rem 0" }}
          >
            Venda
          </a>
          <a
            onClick={(e) => onAddSell(active)}
            uk-toggle="target: #offcanvas-aporte"
            className="uk-button uk-button-text"
            style={{ margin: ".5rem 0" }}
          >
            Histórico
          </a>
        </div>
        <div
          className="uk-card-footer"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <a
            onClick={(e) => onRemoveActive()}
            className="uk-button uk-button-text"
          >
            Remover Ativo
          </a>
        </div>
      </div>
    </div>
  );
};

export default AtivoCard;
