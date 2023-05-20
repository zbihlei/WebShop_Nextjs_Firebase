import {db} from '../../../firebase-config';
import {doc, getDoc} from 'firebase/firestore';

type Props = {
    params: {
        id: string,
    }
}

//get phone from db used collection name and id/ id from params
async function getPhone (coll, id) {
    const phone = await getDoc(doc(db, coll, id))
    if (phone.exists())
      return phone.data()
    else
      return Promise.reject(Error(`No such phone!: ${coll}.${id}`))
  }


export default async function Phone({params} : Props){
    const phone  = await getPhone("phones",params.id);

    return (
    <>
        <div>{phone.name} {phone.model}</div>
        <div>{phone.description}</div>
    </>
    )
}