import { Form } from '../auth/Form'
import { useDispatch } from "react-redux";
import {setUser} from '../../store/userSlice';
import { getAuth, createUserWithEmailAndPassword,getIdToken } from "firebase/auth";

const SignUp = ()=>{
    const dispatch = useDispatch();

    const handleRegister =(email:string, password:string)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
        title ='register'
        handleClick={handleRegister}
        />
    )

}

export {SignUp}

