import { Card } from 'react-bootstrap';

const Weather = ({resultado}) => {

  //destructuring
  const {name, main} = resultado;
  console.log(resultado);
  if (!name) return null;

  const kelvin = 273.15;

  return ( 
    <Card>
      <Card.Body>
        <Card.Title>El Clima en {name} es: </Card.Title>
        <Card.Text>Temperatura actual: {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103; </span></Card.Text>
        <Card.Text>Max: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103; </span> Min:{parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103; </span></Card.Text>
      </Card.Body>
    </Card>
   );
}
 
export default Weather;