import { Form } from '../auth/Form'
import { useDispatch } from "react-redux";
import {setUser} from '../../store/userSlice';
import { getAuth, signInWithEmailAndPassword, getIdToken } from "firebase/auth";


const Login = ()=>{
    const dispatch = useDispatch();

    const handleLogin =(email : string , password : string)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          getIdToken(user)
            .then((token) => {
              dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: token,
              }));
            })
            .catch((error) => {
              console.error("Error getting ID token:", error);
            });
        })
        .catch(() => alert('Invalid user!'));


    }
    return ( 
        <Form
        title = 'Login'
        handleClick={handleLogin}/>
    )
}
export {Login}