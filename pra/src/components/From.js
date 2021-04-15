import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {sendetails,updatedetails} from "../action/action";

const From = ({ currentid, setid }) => {
    const dispatch=useDispatch();
    const[detail,setdetail]=useState({email:"",pass:""});
    const upd_detail = useSelector((state) => (currentid ? state.Details.find((x) => x._id === currentid) : null));

    console.log(upd_detail)
    useEffect(() => {
        if (upd_detail) setdetail(upd_detail);
      }, [upd_detail]);

    const send=async(e)=>{
        if(currentid===0){
            dispatch(sendetails(detail));
        }
        else{
            dispatch(updatedetails(currentid,detail));
        }
    }
    return (
        <div>
            <label> Name </label>
            <input type="email" value={detail.email} onChange={(e)=>setdetail({...detail,email:e.target.value})}/>
            <label> Pass </label>
            <input type="Password"  value={detail.pass}onChange={(e)=>setdetail({...detail,pass:e.target.value})}/>
            <button onClick={send}> send </button>
        </div>
    )
}

export default From;
