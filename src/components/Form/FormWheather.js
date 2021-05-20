import {useState} from 'react';

import {Button, Form} from 'react-bootstrap';
import Error from '../Error/Error';

const FormWheather = ({setValuesForm, setConsultar}) => {

  //States
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [error, setError] = useState(false);
  

  const sendValues = e => {
    e.preventDefault();

    if(ciudad.trim() === '' || pais.trim() === ''){
      setError(true);
      return;
    }

    setError(false);
    setConsultar(true)

    setValuesForm({
      ciudad, 
      pais
    })

    setCiudad('');
    setPais('');

  }

  return ( 
    <Form className='mt-4' onSubmit={sendValues}>
      {error ? <Error title='Apa! parece que metiste mal el dedo' description='Uno o mas campos están vacios' /> : null}
      <Form.Group className='bg-primary p-4 rounded'>
        <Form.Label className='h3'>Selecciona un pais</Form.Label>
        <Form.Control 
          as='select' 
          size='lg'
          value={pais} 
          onChange={e => setPais(e.target.value)}>
          <option value=''>--Paises--</option>
          <option value='ARG'>Argentina</option>
          <option value='BOL'>Bolivia</option>
          <option value='BRA'>Brasil</option>
          <option value='CHL'>Chile</option>
          <option value='COL'>Colombia</option>
          <option value='CUB'>Cuba</option>
          <option value='ECU'>Ecuador</option>
          <option value='HND'>Honduras</option>
          <option value='MEX'>Mexico</option>
          <option value='PRY'>Paraguay</option>
          <option value='URY'>Uruguay</option>
        </Form.Control>
        <Form.Label 
          className='h3 mt-2'
          >Ciudad</Form.Label>
        <Form.Control 
          size='lg' 
          as='input'
          placeholder='Tu ciudad'
          value={ciudad}
          onChange={e => setCiudad(e.target.value)}
        ></Form.Control>
        <Button type='submit' className='btn btn-dark rounded mt-4' block>Solicitar</Button>
      </Form.Group>
    </Form>
   );
}
 
export default FormWheather;