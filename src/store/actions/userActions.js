import Axios from "axios";
import { API_URL } from '@env'

const register = ({formValues}) => async (dispatch) => {
    dispatch({type: "USER_SIGNIN_REQUEST", payload:formValues); 
    try {
        const { data } = await axios.post(`${API_URL}/user/login`, formValues)

        dispatch({type: "USER_REGISTER_SUCCESS", payload: data});
        dispatch({type: "USER_SIGNIN_SUCCESS", payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message : error.message,
        });
    }
}