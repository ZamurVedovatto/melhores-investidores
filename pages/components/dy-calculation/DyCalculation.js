import { useEffect, useState } from "react";

const DyCalculationComponent = () => {
  const [montanteInicial, setMontanteInicial] = useState(1000);
  const [dividendYield, setDividendYield] = useState(10);
  const [aporteMensal, setAporteMensal] = useState(500);
  const [anosRendendo, setAnosRendendo] = useState(15);
  const [valorInvestido, setValorInvestido] = useState(14);
  const [patrimonioFinal, setPatrimonioFinal] = useState(13);

  const onCalculatePatrimonioFinal = (e) => {
    e.preventDefault();
    setPatrimonioFinal(calcDY(montanteInicial, anosRendendo));
    setValorInvestido((anosRendendo * (12 * aporteMensal) + montanteInicial).toFixed(2));
  }

  const calcDY = (calculatedAmount, months) => {
    console.log(calculatedAmount, months)
    if (months > 1) {
      let amount = ((calculatedAmount + (12 * aporteMensal)) * (100 + dividendYield))/100;
      return calcDY(amount, months - 1);
    }
    return (((calculatedAmount + (12 * aporteMensal)) * (100 + dividendYield))/100).toFixed(2);
  }

  return(
    <div className="dy-calculation-wrapper uk-card uk-card-default uk-card-body">
      <span className="dy-calculation-title">Calculadora de Dividendos</span>
        <div className="dy-calculation-content">
          <form className="uk-grid-small" uk-grid="true">
            <div className="uk-width-1-5@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Montante inicial</label>
              <input className="uk-input" type="number" value={montanteInicial} onChange={e => setMontanteInicial(e.target.value)} />
            </div>
            <div className="uk-width-1-5@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Dividend Yield</label>
              <input className="uk-input" type="number" value={dividendYield} onChange={e => setDividendYield(e.target.value)} />
            </div>
            <div className="uk-width-1-5@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Aporte mensal</label>
              <input className="uk-input" type="number" value={aporteMensal} onChange={e => setAporteMensal(e.target.value)} />
            </div>
            <div className="uk-width-1-5@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Por quantos anos</label>
              <input className="uk-input" type="number" value={anosRendendo} onChange={e => setAnosRendendo(e.target.value)} />
            </div>
            <div className="uk-width-1-5@s">
              <button className="uk-button uk-button default" onClick={(e) => onCalculatePatrimonioFinal(e) }>Calcular</button>
            </div>
          </form>
          <div className="dy-results" uk-grid="true">
            <div className="uk-width-1-2@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Patrimônio acumulado</label>
              <input className="uk-input" type="number" value={patrimonioFinal} disabled />
            </div>
            <div className="uk-width-1-2@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Valor investido</label>
              <input className="uk-input" type="number" value={valorInvestido} disabled />
            </div>
          </div>
        </div>
    </div>
  )
}

export default DyCalculationComponent;