import React from 'react';
import { useState } from "react";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

const currencyFormatter = (value) => {
  if (!Number(value)) return "";

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  return `${formatter.format(value / 100)}`;
}

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      suffix=",00"
      prefix="R$"
    />
  );
}

function NumberFormatPercentual(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      suffix="%"
    />
  );
}

const DyCalculationComponent = () => {
  const [montanteInicial, setMontanteInicial] = useState(1500);
  const [percentualValorizacao, setPercentualValorizacao] = useState(6.5);
  const [aporteMensal, setAporteMensal] = useState(350);
  const [anosRendendo, setAnosRendendo] = useState(15);
  const [valorInvestido, setValorInvestido] = useState(64500);
  const [patrimonioFinal, setPatrimonioFinal] = useState(112024);

  const onCalculatePatrimonioFinal = (e) => {
    e.preventDefault();
    setPatrimonioFinal(calcDY(montanteInicial, anosRendendo));
    setValorInvestido((anosRendendo * (12 * aporteMensal) + montanteInicial).toFixed(0));
  }

  const calcDY = (calculatedAmount, months) => {
    if (Number(months) > 1) {
      let amount = ((calculatedAmount + (12 * aporteMensal)) * (100 + Number(percentualValorizacao)))/100;
      console.log(amount);
      console.log(months);
      console.log(Number(percentualValorizacao));
      console.log(" ")
      return calcDY(amount, months - 1);
    }
    return (((calculatedAmount + (12 * aporteMensal)) * (100 + Number(percentualValorizacao)))/100).toFixed(0);
  }

  const handleSliderChange = (event, newValue) => {
    setMontanteInicial(newValue); 
  };

  const handleInputChange = (event) => {
    setMontanteInicial(event.target.value === '' ? '' : Number(event.target.value));
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
    <Card style={{ padding: '0', marginBottom: "1rem"}}>
      <CardHeader style={{ padding: '1rem 2rem', backgroundColor: "#1584c9", color: "white"}} title="Simulador de Valorização de Patrimônio" subheader="Versão Beta" />
      <CardContent style={{ padding: '2rem 4rem', borderBottom: "1px solid lightgrey"}}>
        <div style={{ lineHeight: "1.2" }}>
          <span> Simule os resultados do seu investimento de acordo com o investimento inicial, percentual de valorização anual esperado, possível média de aportes mensais e a quantidade de anos em que o seu investimento ficará rendendo.</span>
        </div>
        <div className="dy-calculation-content" style={{ marginTop: "2rem" }}>
          <form className="uk-grid-small" uk-grid="true">
            <div className="uk-width-1-1@s">
              <label className="uk-form-label" htmlFor="form-stacked-text">Investimento Inicial</label>
              <Grid container spacing={10} alignItems="center">
                <Grid item xs style={{ padding: "2rem 4rem" }}>
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
                <Grid item style={{ padding: "0 2rem" }}>
                  <TextField
                    label="Investimento inicial"
                    value={montanteInicial}
                    onChange={handleInputChange}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="uk-width-1-4@s">
              <TextField
                label="Valorização Anual"
                value={percentualValorizacao}
                onChange={e => setPercentualValorizacao(e.target.value)}
                name="percentualValorização"
                id="formatted-percentualValorização-input"
                InputProps={{
                  inputComponent: NumberFormatPercentual,
                }}
              />
            </div>
            <div className="uk-width-1-4@s">
              <TextField
                label="Aporte mensal"
                value={aporteMensal}
                onChange={e => setAporteMensal(e.target.value)}
                name="aporteMensal"
                id="formatted-aporteMensal-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </div>
            <div className="uk-width-1-4@s">
              <TextField
                label="Por quantos anos"
                value={anosRendendo}
                onChange={e => setAnosRendendo(e.target.value)}
                name="anosRendendo"
                id="formatted-anosRendendo-input"
              />
            </div>
            <div className="uk-width-1-4@s" style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginBottom: ".15rem" }}>
              <Button variant="contained" color="primary" onClick={(e) => onCalculatePatrimonioFinal(e) }>Calcular</Button>
            </div>
          </form>
        </div>
      </CardContent>
      <CardActions style={{ padding: '2rem 4rem' }}>
        <div uk-grid="true">
        <div className="uk-width-1-2@s">
          <TextField
              label="Valor Investido"
              value={valorInvestido}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </div>
          <div className="uk-width-1-2@s">
            <TextField
              label="Patrimônio Acumulado"
              value={patrimonioFinal}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </div>

        </div>
      </CardActions>
    </Card>
  )
}

export default DyCalculationComponent;