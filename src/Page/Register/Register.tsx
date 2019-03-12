import * as React from 'react';
import * as E from './RegisterStyle';
import InputBlock from '../../Component/InputBlock';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface RegisterProps {}
interface RegisterState {}
export default class Register extends React.Component<RegisterProps, RegisterState> {
  render() {
    return (
      <E.RegisterContainer>
        <E.RegisterTitle>HiFi Registeration page</E.RegisterTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors: any = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={E.RegisterForm}>
              <Field
                className={E.RegisterFormField}
                type='email'
                name='email'
                placeholder='Email'
              />
              <ErrorMessage className={E.RegisterFormErrorMessage} name='email' component='div' />
              <Field
                className={E.RegisterFormField}
                type='password'
                name='password'
                placeholder='Password'
              />
              <ErrorMessage
                className={E.RegisterFormErrorMessage}
                name='password'
                component='div'
              />
              <E.RegisterFormSubmitButton type='Submit' disabled={isSubmitting}>
                Submit
              </E.RegisterFormSubmitButton>
            </Form>
          )}
        </Formik>
      </E.RegisterContainer>
    );
  }
}
