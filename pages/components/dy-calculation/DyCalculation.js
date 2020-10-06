import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

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

  const handleChange = (event, newValue) => {
    setMontanteInicial(newValue);
  };


  const valuetext = (value) => {
    return `R$ ${value},00`;
  }

  const marks = [
    {
      value: 1000,
      label: 'R$1.000,00',
    },
    {
      value: 10000,
      label: 'R$10.000,00',
    },
    {
      value: 50000,
      label: 'R$50.000,00',
    },
    {
      value: 100000,
      label: 'R$100.000,00',
    },
  ];


  return(
    <div className="dy-calculation-wrapper uk-card uk-card-default uk-card-body">
      <span className="dy-calculation-title">Calculadora de Dividendos</span>
        <div className="dy-calculation-content">
          <form className="uk-grid-small" uk-grid="true">
            <div className="uk-width-1-1@s">
              <Typography id="discrete-slider" gutterBottom>Montante inicial</Typography>
              <Slider             
                step={100}
                defaultValue={1000}
                min={100}
                max={100000}
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                value={montanteInicial}
                onChange={handleChange}
                marks={marks}
                aria-labelledby="discrete-slider"
              />
            </div>
            <div className="uk-width-1-4@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Dividend Yield</label>
              <input className="uk-input" type="number" value={dividendYield} onChange={e => setDividendYield(e.target.value)} />
            </div>
            <div className="uk-width-1-4@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Aporte mensal</label>
              <input className="uk-input" type="number" value={aporteMensal} onChange={e => setAporteMensal(e.target.value)} />
            </div>
            <div className="uk-width-1-4@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Por quantos anos</label>
              <input className="uk-input" type="number" value={anosRendendo} onChange={e => setAnosRendendo(e.target.value)} />
            </div>
            <div className="uk-width-1-4@s">
              <Button variant="contained" color="primary" onClick={(e) => onCalculatePatrimonioFinal(e) }>Calcular</Button>
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