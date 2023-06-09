import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from '../app/styles/form.module.scss';

interface Client {
    name: string;
    email: string;
    surname: string;
    phone: string;
  }
  
  interface Props {
    handleSubmit: (client: Client) => void;
  }

const MyForm: React.FC<Props> = ({handleSubmit}: any) => {

return (
    <Formik
    initialValues = {{
        name: '',
        email: '',
        surname: '',
        phone: ''
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
                         .required('Required field!'),
             phone: Yup.number()
                         .min(8)
                         .required('Required field!')
         })} 
         onSubmit = {(client)=>handleSubmit(client)}
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
        <label htmlFor="text">phone</label>          
        <Field
            label="phone"
            id="phone"
            name="phone"
            type="phone"
            />          
        <ErrorMessage className={styles.error} name='phone' component="div"/>   

        <label htmlFor="text">email</label>
           <Field
            label="email"
            id="email"
            name="email"
            type="email"
           />    
        <ErrorMessage  className={styles.error} name='email' component="div"/> 
      
            <button type="submit">order</button>
        </Form>
         </div>
    </Formik>
    )
}

export default MyForm;