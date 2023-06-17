import { Form } from '../auth/Form'
import { useDispatch } from "react-redux";
import {setUser} from '../../store/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ()=>{
    const dispatch = useDispatch();

    const handleRegister =(email:string, password:string)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token:user.accessToken, 
                }));
            })
            .catch(console.error)
    }

    return (
        <Form
        title ='register'
        handleClick={handleRegister}
        />
    )

}

export {SignUp}

