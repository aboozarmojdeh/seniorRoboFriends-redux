import axios from 'axios';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from './constants';

export const setSearchField=(text)=>{
    // console.log(text)
    return {
    type:CHANGE_SEARCH_FIELD,
    payload:text
}}


export const requestRobots=()=>(dispatch)=>{
    dispatch({type:REQUEST_ROBOTS_PENDING})
    axios.get("https://jsonplaceholder.typicode.com/users")
<<<<<<< HEAD
    .then(axiosData=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:axiosData.data}))
=======
    .then(({ data })=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
>>>>>>> 7808e190db21baf4aa4df9f6669f1405a5034fe8
    .catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
}