import * as React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function RegistrationForm() {
  const initialValues = { firstName: "", lastName: "", email: "", password: "" }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('El campo no puede estar vacío'),
    lastName: Yup.string().required('El campo no puede estar vacío'),
    email: Yup.string().email('Dirección de correo invalida').required('Es necesario proporcionar una dirección de email'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Es necesario proporcionar una contraseña.')
  })

  const ErrorTooltip = (msg) => <div className='invalid-tooltip mt-1'>{msg}</div>;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}>
      {({ errors: { firstName, lastName, email, password } }) =>
        <Form className='container py-3 col-md-6 col-lg-4'>
          <div className="mb-3 position-relative">
            <label htmlFor="firstName" className="formLabel">Nombre</label>
            <Field name="firstName" type="text" className={`form-control ${firstName && "is-invalid"}`} />
            <ErrorMessage name="firstName" render={ErrorTooltip} />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="lastName" className="formLabel">Apellido</label>
            <Field name="lastName" type="text" className={`form-control ${lastName && "is-invalid"}`} />
            <ErrorMessage name="lastName" render={ErrorTooltip} />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="email" className="formLabel">Email</label>
            <Field name="email" type="email" className={`form-control ${email && "is-invalid"}`} />
            <ErrorMessage name="email" render={ErrorTooltip} />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="formLabel">Contraseña</label>
            <Field name="password" type="password" className={`form-control ${password && "is-invalid"}`} />
            <ErrorMessage name="password" render={ErrorTooltip} />
          </div>
          <button type="submit" className="btn btn-primary mx-auto d-block">Registarse</button>
        </Form>}
    </Formik>
  );
}

export default RegistrationForm;