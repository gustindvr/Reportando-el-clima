import { Alert } from 'react-bootstrap';

const Error = ({title, description}) => {
  return ( 
    <>
    <Alert variant='danger'>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{description}</p>
    </Alert>
    </>
   );
}
 
export default Error;