import { Card } from 'react-bootstrap';

import './Weather.css';

const Weather = ({resultado, setConsultar}) => {

  //destructuring
  const {name, main} = resultado;

  if (!name){
    return null
  }else{
    setConsultar(false);
  }

  const kelvin = 273.15;

  return ( 
    <Card className='mt-4 mb-5 p-0 bg-warning'>
      <Card.Body className='p-0 cardBody'>
        <Card.Title className='titleCard'>El Clima en {name} es: </Card.Title>

          <Card.Text className='cardTextTemp'>Temperatura actual: {parseFloat(main.temp - kelvin, 10).toFixed(1)} <span> &#x2103; </span></Card.Text>

          <Card.Text className='cardTextMaxMin' >Max: {parseFloat(main.temp_max - kelvin, 10).toFixed(1)}  &#x2103; <span> Min: {parseFloat(main.temp_min - kelvin, 10).toFixed(1)} &#x2103; </span></Card.Text>

      </Card.Body>
    </Card>
   );
}
 
export default Weather;