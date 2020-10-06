import React from 'react';
import { useState } from "react";
import { Button } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TextField from '@material-ui/core/TextField';


const DyCalculationComponent = () => {
  const [montanteInicial, setMontanteInicial] = useState(10000);
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
    if (months > 1) {
      let amount = ((calculatedAmount + (12 * aporteMensal)) * (100 + dividendYield))/100;
      return calcDY(amount, months - 1);
    }
    return (((calculatedAmount + (12 * aporteMensal)) * (100 + dividendYield))/100).toFixed(2);
  }

  const handleSliderChange = (event, newValue) => {
    setMontanteInicial(newValue);
  };

  const handleInputChange = (event) => {
    setMontanteInicial(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = (value) => {
    let valueNumber = Number(value);
    if (valueNumber < 0) {
      setMontanteInicial(0);
    } else {
      setMontanteInicial(valueNumber);
    }
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
      value: 25000,
      label: 'R$25.000,00',
    },
    {
      value: 50000,
      label: 'R$50.000,00',
    },
    {
      value: 75000,
      label: 'R$75.000,00',
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
              {/* <Typography id="discrete-slider" gutterBottom>Montante inicial</Typography>
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
                valueLabel= {{
                  left: 'calc(-50% + 12px)',
                  top: -22,
                  '& *': {
                    background: 'transparent',
                    color: '#000',
                  },
                }}
              /> */}


              <Typography id="input-slider" gutterBottom>Montante inicial</Typography>
              <Grid container spacing={10} alignItems="center">
                <Grid item>
                  <MonetizationOnIcon />
                </Grid>
                <Grid item xs>
                  <Slider
                    step={100}
                    defaultValue={10000}
                    min={100}
                    max={100000}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="off"
                    value={typeof montanteInicial === 'number' ? montanteInicial : 0}
                    onChange={handleSliderChange}
                    marks={marks}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <TextField id="outlined-basic" label="Investimento inicial" variant="outlined"
                    value={montanteInicial}
                    onChange={handleInputChange}
                    onBlur={(event) => handleBlur(event.target.value)}
                  />

                  {/* <Input
                    margin="dense"
                    value={montanteInicial}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  /> */}
                </Grid>
              </Grid>





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