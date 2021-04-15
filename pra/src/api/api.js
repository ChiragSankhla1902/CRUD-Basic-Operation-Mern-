import axios from "axios";

const url = 'http://localhost:8888/par/contactus';
const url1 = 'http://localhost:8888/par';

export const send_Details = (newcontact)=>axios.post(url,newcontact);
export const get_Details = ()=>axios.get(url1);
export const update_Details= (id, updatedDet) => axios.patch(`${url1}/${id}`, updatedDet);