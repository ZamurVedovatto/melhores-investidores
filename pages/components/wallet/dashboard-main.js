import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";

const DashboardMain = (props) => {
  const { info, user } = props;
  const [chartData, setChartData] = useState(
    {
      labels: ["Ações", "FIIs", "Renda Fixa", "Reserva de Oportunidade"],
      datasets: [
        {
          data: [45, 35, 10, 10],
          backgroundColor: ["red", "blue", "green", "yellow"],
        },
      ],
    },
    []
  );

  return (
    <div className="dashboard-wrapper">
      <div className="uk-card">
        <span>Seja bem vindo, {user.username}</span>
      </div>
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
            <td>{info.quotas}</td>
            <td>R$ {info.patrimony}</td>
            <td>-R$ {info.lossProfits}</td>
          </tr>
        </tbody>
      </table>

      <Pie
        data={{
          labels: chartData.labels,
          datasets: chartData.datasets,
        }}
        height="50vh"
      />
    </div>
  );
};

export default DashboardMain;
