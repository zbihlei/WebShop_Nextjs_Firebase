import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import * as Yup from 'yup';
import styles from '../app/styles/form.module.scss';


const MyForm = () => {
 
return (
    <Formik
    initialValues = {{
        name: '',
        email: '',
        surname: '',
        text: ''
    }}
    validationSchema={
        Yup.object({
            name: Yup.string()
                     .min(2, 'Minimum 2 symb.') 
                     .required('Required field!'),
            email: Yup.string()
                     .email('Wrong email adress')
                     .required('Required field!'),
             surname: Yup.string()
                         .required('Required field!')
         })} 
         onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
    >
<div className={styles.wrapp}> 
        <Form className={styles.form}>
            <h2>your adress here...</h2>

         <label htmlFor="text">name</label>
         <Field
            label="name"
            id="name"
            name="name"
            type="text"
            />          
        <ErrorMessage className={styles.error} name='name' component="div"/>  

        <label htmlFor="text">surname</label>          
        <Field
            label="surname"
            id="surname"
            name="surname"
            type="text"
            />          
        <ErrorMessage className={styles.error} name='surname' component="div"/>   

        <label htmlFor="text">email</label>
           <Field
            label="email"
            id="email"
            name="email"
            type="email"
           />    
        <ErrorMessage  className={styles.error} name='email' component="div"/> 

         
            <label htmlFor="text">your comments</label>
            <Field 
                id="text"
                name="text"
                as="textarea"
                 />
      
            <button type="submit">order</button>
        </Form>
         </div>
    </Formik>
    )
}

export default MyForm;