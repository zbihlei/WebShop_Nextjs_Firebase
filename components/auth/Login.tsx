import { Form } from '../auth/Form'
import { useDispatch } from "react-redux";
import {setUser} from '../../store/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = ()=>{
    const dispatch = useDispatch();

    const handleLogin =(email, password)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token:user.accessToken,
                }));
            })
            .catch(() => alert('Invalid user!')) 


    }
    return ( 
        <Form
        title = 'Login'
        handleClick={handleLogin}/>
    )
}
export {Login}