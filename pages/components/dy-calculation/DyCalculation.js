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

function NumberFormatNumber(props) {
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
    />
  );
}

const DyCalculationComponent = () => {
  const [montanteInicial, setMontanteInicial] = useState(1500);
  const [percentualValorizacao, setPercentualValorizacao] = useState(6.5);
  const [aporteMensal, setAporteMensal] = useState(350);
  const [anosRendendo, setAnosRendendo] = useState(15);
  const [valorInvestido, setValorInvestido] = useState(64500);
  const [patrimonioFinal, setPatrimonioFinal] = useState(112025);

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

  const handleSliderChangePercentualValorizacao  = (event, newValue) => {
    setPercentualValorizacao(newValue); 
  };

  const handleSliderChangeAporteMensal  = (event, newValue) => {
    setAporteMensal(newValue); 
  };

  const handleSliderChangeAnosRendendo  = (event, newValue) => {
    setAnosRendendo(newValue); 
  };

  const handleInputChange = (event, type) => {
    let newValue = event.target.value === '' ? '' : Number(event.target.value)

    switch (type) {
      case 'montanteInicial':
        setMontanteInicial(newValue);
        break;
      case 'percentualValorizacao':
        setPercentualValorizacao(newValue); 
        break;
      case 'aporteMensal':
        setAporteMensal(newValue); 
        break;
      case 'anosRendendo':
        setAnosRendendo(newValue); 
        break;
      default:
        break;
    }    
  };

  const OnSetMoneyValue = (value) => {
    return `R$ ${value},00`;
  }

  const OnSetPercentualValue = (value) => {
    return `${value}%`;
  }

  const OnSetNumberValue = (value) => {
    return value;
  }

  const montanteInicialMarks = [
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

  const percentualValorizacaoMarks = [
    {
      value: 1,
      label: '1%',
    },
    {
      value: 5,
      label: '5%',
    },
    {
      value: 10,
      label: '10%',
    },
    {
      value: 15,
      label: '15%',
    },
    {
      value: 20,
      label: '20%',
    },
    {
      value: 50,
      label: '50%',
    },
  ];

  const aporteMensalMarks = [
    {
      value: 100,
      label: 'R$100,00',
    },
    {
      value: 1000,
      label: 'R$1000,00',
    },
    {
      value: 2500,
      label: 'R$2500,00',
    },
    {
      value: 5000,
      label: 'R$5000,00',
    }
  ];

  const anosRendendoMarks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 15,
      label: '15',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 45,
      label: '45',
    },
  ];


  return(
    <Card style={{ padding: '0', marginBottom: "1rem"}}>
      <CardHeader style={{ padding: '1rem 2rem', backgroundColor: "#1584c9", color: "white"}} title="Simulador de Valorização de Patrimônio" />
      <CardContent style={{ padding: '2rem 4rem', borderBottom: "1px solid lightgrey"}}>
        <div style={{ lineHeight: "1.2" }}>
          <span> Simule os resultados do seu investimento de acordo com o investimento inicial, percentual de valorização anual esperado, possível média de aportes mensais e a quantidade de anos em que o seu investimento ficará rendendo.</span>
        </div>
        <div className="dy-calculation-content" style={{ marginTop: "2rem" }}>
          <form className="uk-grid-small" uk-grid="true">

            {/* montanteInicial */}
            <div className="uk-width-1-1@s uk-card uk-card-default" style={{ padding: "1rem 2rem" }}>
              <label className="uk-form-label" htmlFor="form-stacked-text">Investimento Inicial</label>
              <Grid container spacing={10} alignItems="center">
                <Grid item xs style={{ padding: "2rem 4rem 0" }}>
                  <Slider
                    step={100}
                    defaultValue={10000}
                    min={100}
                    max={100000}
                    getAriaValueText={OnSetMoneyValue}
                    valueLabelDisplay="off"
                    value={typeof montanteInicial === 'number' ? montanteInicial : 0}
                    onChange={handleSliderChange}
                    marks={montanteInicialMarks}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item style={{ padding: "0 2rem" }}>
                  <TextField
                    value={montanteInicial}
                    onChange={(event) => handleInputChange(event, 'montanteInicial')}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </Grid>
              </Grid>
            </div>

            {/* percentualValorizacao */}
            <div className="uk-width-1-1@s uk-card uk-card-default" style={{ padding: "1rem 2rem" }}>
              <label className="uk-form-label" htmlFor="form-stacked-text">Percentual de Valorização Anual</label>
              <Grid container spacing={10} alignItems="center">
                <Grid item xs style={{ padding: "2rem 4rem 0" }}>
                  <Slider
                    step={.25}
                    defaultValue={6.5}
                    min={0}
                    max={50}
                    getAriaValueText={OnSetPercentualValue}
                    valueLabelDisplay="auto"
                    value={typeof percentualValorizacao === 'number' ? percentualValorizacao : 0}
                    onChange={handleSliderChangePercentualValorizacao}
                    marks={percentualValorizacaoMarks}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item style={{ padding: "0 2rem" }}>
                  <TextField
                    value={percentualValorizacao}
                    onChange={(event) => handleInputChange(event, 'percentualValorizacao')}
                    name="percentualValorizacao"
                    id="formatted-percentualValorizacao-input"
                    InputProps={{
                      inputComponent: NumberFormatPercentual,
                    }}
                  />
                </Grid>
              </Grid>
            </div>

            {/* aporteMensal */}
            <div className="uk-width-1-1@s uk-card uk-card-default" style={{ padding: "1rem 2rem" }}>
              <label className="uk-form-label" htmlFor="form-stacked-text">Aporte Mensal</label>
              <Grid container spacing={10} alignItems="center">
                <Grid item xs style={{ padding: "2rem 4rem 0" }}>
                  <Slider
                    step={50}
                    defaultValue={350}
                    min={0}
                    max={5000}
                    getAriaValueText={OnSetMoneyValue}
                    valueLabelDisplay="auto"
                    value={typeof aporteMensal === 'number' ? aporteMensal : 0}
                    onChange={handleSliderChangeAporteMensal}
                    marks={aporteMensalMarks}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item style={{ padding: "0 2rem" }}>
                  <TextField
                    value={aporteMensal}
                    onChange={(event) => handleInputChange(event, 'aporteMensal')}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </Grid>
              </Grid>
            </div>

            {/* anosRendendo */}
            <div className="uk-width-1-1@s uk-card uk-card-default" style={{ padding: "1rem 2rem" }}>
              <label className="uk-form-label" htmlFor="form-stacked-text">Por Quantos Anos</label>
              <Grid container spacing={10} alignItems="center">
                <Grid item xs style={{ padding: "2rem 4rem 0" }}>
                  <Slider
                    step={1}
                    defaultValue={15}
                    min={0}
                    max={45}
                    getAriaValueText={OnSetNumberValue}
                    valueLabelDisplay="auto"
                    value={typeof anosRendendo === 'number' ? anosRendendo : 0}
                    onChange={handleSliderChangeAnosRendendo}
                    marks={anosRendendoMarks}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item style={{ padding: "0 2rem" }}>
                  <TextField
                    value={anosRendendo}
                    onChange={(event) => handleInputChange(event, 'anosRendendo')}
                    name="anosRendendo"
                    id="formatted-anosRendendo-input"
                    InputProps={{
                      inputComponent: NumberFormatNumber,
                    }}
                  />
                </Grid>
              </Grid>
            </div>


            <div className="uk-width-1-1@s" style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", margin: "1.5rem 0 0" }}>
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