const AtivosMain = (props) => {
  const onChangeAtivo = (ativo) => {
    console.log(ativo);
  };

  return (
    <div className="ativos-main-wrapper" style={{ margin: "1rem 2rem" }}>
      <div
        className="uk-child-width-1-1@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-grid-match uk-text-center"
        uk-grid="true"
      >
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-card-hover">
            <h3 className="uk-card-title">ITSA4</h3>
            <div className="uk-card-body">
              <table className="uk-table">
                <tbody>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-aporte"
                      >
                        Novo Aporte
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-venda"
                      >
                        Nova Venda
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-historico"
                      >
                        Histórico de Transações
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Cotas: 30</td>
                  </tr>
                  <tr>
                    <td>Preço médio: R$14.83</td>
                  </tr>
                  <tr>
                    <td>Cotação: R$13.53</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-card-hover">
            <h3 className="uk-card-title">BBDC4</h3>
            <div className="uk-card-body">
              <table className="uk-table">
                <tbody>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-aporte"
                      >
                        Novo Aporte
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-venda"
                      >
                        Nova Venda
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-historico"
                      >
                        Histórico de Transações
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Cotas: 30</td>
                  </tr>
                  <tr>
                    <td>Preço médio: R$14.83</td>
                  </tr>
                  <tr>
                    <td>Cotação: R$13.53</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-card-hover">
            <h3 className="uk-card-title">SAPR4</h3>
            <div className="uk-card-body">
              <table className="uk-table">
                <tbody>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-aporte"
                      >
                        Novo Aporte
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-venda"
                      >
                        Nova Venda
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-historico"
                      >
                        Histórico de Transações
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Cotas: 30</td>
                  </tr>
                  <tr>
                    <td>Preço médio: R$14.83</td>
                  </tr>
                  <tr>
                    <td>Cotação: R$13.53</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-card-hover">
            <h3 className="uk-card-title">IRDM11</h3>
            <div className="uk-card-body">
              <table className="uk-table">
                <tbody>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-aporte"
                      >
                        Novo Aporte
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-venda"
                      >
                        Nova Venda
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        onClick={(e) => onChangeAtivo("brsr6")}
                        type="button"
                        uk-toggle="target: #offcanvas-historico"
                      >
                        Histórico de Transações
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Cotas: 30</td>
                  </tr>
                  <tr>
                    <td>Preço médio: R$14.83</td>
                  </tr>
                  <tr>
                    <td>Cotação: R$13.53</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">Novo Ativo</h3>
            <a href="" uk-icon="icon: plus-circle; ratio: 2"></a>
          </div>
        </div>
      </div>

      <div id="offcanvas-aporte" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          ></button>

          <h3>BRSR6</h3>

          <form>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Novo Aporte</legend>
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

      <div id="offcanvas-historico" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          ></button>

          <h3>BRSR6</h3>

          <form>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Histórico de transações</legend>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AtivosMain;
