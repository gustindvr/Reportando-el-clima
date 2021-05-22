import {useState, useEffect} from 'react';
import FormWheather from './components/Form/FormWheather';

import {Container, Row, Col, Alert} from 'react-bootstrap';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import Error from './components/Error/Error';


function App() {

  //States
  const [error, setError] = useState(false);
  const [valuesForm, setValuesForm] = useState({});
  const [consultar, setConsultar] = useState(false);
  const [world, setWorld] = useState(true);
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
        
        setResultado(resultado);
        setConsultar(false);
        setWorld(false);

        if(resultado.cod === '404'){
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
      <Header />
      <Container  className='pt-5'>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <FormWheather
              setValuesForm={setValuesForm}
              setConsultar={setConsultar}
            />
          </Col>
          <Col sm={12} md={8} lg={8}>
            {error ? <Error title='Epa! Parece que hubo un error' description='No se encontraron los parametros buscados' /> : null}
            {
              (world) ?
              <Alert variant="warning" className='mt-4'>
                <Alert.Heading>Hola! Bienvenidx</Alert.Heading>
                <p>
                  Este es un proyecto de prueba donde podrás consultar el clima de algunas ciudades o provincias que se encuentran en paises de América Latina.
                </p>
                <hr />
                <p className="mb-0">
                  Muchas gracias por pasar! Espero poder ir entregandote mejores experiencias en el futuro. Nos vemos!
                </p>
              </Alert>
              : <Weather resultado={resultado} setConsultar={setConsultar} />
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
