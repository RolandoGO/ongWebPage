import * as React from 'react'
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { userRegister } from '../store/auth/authActions';
import * as Yup from 'yup';
import InputGroup from './InputGroup';

import { register } from '../services/authService';


function RegistrationForm() {

  const dispatch = useDispatch();

  const initialValues = { name: "", lastName: "", email: "", password: "" }
  const validationSchema = Yup.object({
    name: Yup.string().required('El campo no puede estar vacío'),
    lastName: Yup.string().required('El campo no puede estar vacío'),
    email: Yup.string().email('Dirección de correo invalida').required('Es necesario proporcionar una dirección de email'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Es necesario proporcionar una contraseña.')
  });


  const startRegister = async (values) => { 
    try {
      const { name, email, password } = values;
      const response = await register(name, email, password);
      const { data } = response;
      dispatch( userRegister( data ));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        startRegister(values);
        }}>

      {({ errors }) =>
        <Form className="container py-3 col-md-6 col-lg-4">
          <h1 className="fw-bold p-1 mb-4">Formulario de registro</h1>
          <InputGroup identifier="name" type="text  " labelText="Nombre" errors={errors} />
          <InputGroup identifier="lastName" labelText="Apellido" errors={errors} />
          <InputGroup identifier="email" type="email" labelText="Email" errors={errors} />
          <InputGroup identifier="password" type="password" labelText="Contraseña" errors={errors} />
          <button type="submit" className="btn btn-primary btn-lg mx-auto d-block mt-5">Registarse</button>
        </Form>}
    </Formik>
  );
}

export default RegistrationForm;