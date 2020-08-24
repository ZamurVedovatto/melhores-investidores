import { Pie } from "react-chartjs-2";

const DashboardMain = (props) => {
  const state = {
    labels: ["Ações", "FIIs", "Renda Fixa", "Reserva de Oportunidade"],
    datasets: [
      {
        data: [45, 35, 10, 10],
        backgroundColor: ["red", "blue", "green", "yellow"],
      },
    ],
  };

  return (
    <div className="dashboard-wrapper">
      <table className="uk-table uk-table-divider">
        <thead>
          <tr>
            <th>Cotas</th>
            <th>Valor Patrimonial</th>
            <th>Lucros/Perdas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>279</td>
            <td>R$ 5.016,34</td>
            <td>-R$ 356,66 (-7,11%)</td>
          </tr>
        </tbody>
      </table>

      <Pie
        data={{
          labels: state.labels,
          datasets: state.datasets,
        }}
        height="30vh"
      />
    </div>
  );
};

export default DashboardMain;
