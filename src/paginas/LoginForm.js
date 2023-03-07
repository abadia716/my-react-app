import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import './LoginForm.css';

const LoginForm = () => {
  const [showForm, setShowForm] = useState(false);

  const formAnimation = useSpring({
    opacity: showForm ? 1 : 0,
    transform: showForm ? 'translateY(0)' : 'translateY(20px)',
  });

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className='FormContainer'>
        <Button variant='primary' onClick={handleShowForm}>
          Iniciar sesión
        </Button>
        <animated.div style={formAnimation}>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Ingresa tu email' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' placeholder='Ingresa tu contraseña' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Iniciar sesión
            </Button>
          </Form>
        </animated.div>
      </div>
    </>
  );
};

export default LoginForm;
