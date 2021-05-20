import {useState, useEffect} from 'react';
import FormWheather from './components/Form/FormWheather';

import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

function App() {

  //States
  const [error, setError] = useState(false);
  const [valuesForm, setValuesForm] = useState({});
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});

  //Destructuring
  const {ciudad, pais} = valuesForm;

  //Llamada a Api
  useEffect(() => {
    const punchApi = async () => {
      if(consultar){
        let apiId = 'c6cff0b6b13dbdb33f80fb7d8a262384';
        
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json(); 
        
        setConsultar(false);
        setResultado(resultado);

        if(resultado.error === '404'){
          setError(true);
        }else{
          setError(false);
        }
     }
    }
    punchApi()
  }, [ciudad, pais, consultar])

  return (
    <>
      <Header title='El clima en el mundo' />
      <Container>
        <Row>
          <Col sm={12} md={12} lg={4}>
            <FormWheather
              setValuesForm={setValuesForm}
              setConsultar={setConsultar}
            />
          </Col>
          <Col sm={12} md={12} lg={8}>
            {
              (error) ?
                null
              : <Weather resultado={resultado} />
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
