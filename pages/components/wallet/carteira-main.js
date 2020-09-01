const CarteiraMain = (props) => {
  const { actives } = props;

  return (
    <>
      <table className="uk-table uk-table-small uk-table-divider">
        <thead>
          <tr>
            <th>Ativo</th>
            <th>Tipo</th>
            <th>Setor</th>
            <th>SubSetor</th>
            <th>% Wallet</th>
            <th>Cotas</th>
            <th>Preço Médio</th>
            <th>Preço de Mercado</th>
            <th>Investimento</th>
            <th>Valor Patrimonial de Mercado</th>
            <th>Valorização R$</th>
            <th>Valorização %</th>
          </tr>
        </thead>
        <tbody>
          {actives &&
            actives.map((active) => (
              <tr key={active.code}>
                <td>{active.code}</td>
                <td>fazer</td>
                <td>{active.division}</td>
                <td>{active.sector}</td>
                <td>fazer</td>
                <td>{active.quotas}</td>
                <td>{active.averagePrice}</td>
                <td>{active.price} (ajustar)</td>
                <td>{active.patrimony}</td>
                <td>fazer</td>
                <td>fazer</td>
                <td>fazer</td>
              </tr>
            ))}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
};

export default CarteiraMain;
