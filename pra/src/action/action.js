import * as api from "../api/api";

export const sendetails=(details)=>async(dispatch)=>{
    try {
        const {data}= await api.send_Details(details);
        dispatch({type:"CREATE" ,payload:data })
    } catch (error) {
        console.log(error)
    }
};

export const updatedetails= (id, detail) => async (dispatch) => {
  try {
    const { data } = await api.update_Details(id, detail);
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getdetails= () => async (dispatch) => {
    try {
      const { data } = await api.get_Details();
      // console.log(data);
  
      dispatch({ type:'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
};



};