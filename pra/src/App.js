import './App.css';
import Form from "./components/From";
import { useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import { getdetails } from './action/action';


const App = () =>{

  const Det = useSelector((state) =>state.Details);
  // console.log("hello")
  const [currentid, setid] = useState(null);
  // console.log(Det);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdetails());
  }, [currentid,dispatch]);
  console.log(currentid);

  return<>
          <h1>CRUD OPERATION</h1>
          <Form currentid={currentid} setid={setid}/>
          <h1> LIST</h1>
          {Det.map((val,index)=>{
            return <div key={val._id} onClick={()=>setid(val._id)}> <h6> {val.email} and {val.pass} </h6></div>
          })}
          
        </>
}

export default App;
