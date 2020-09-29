import axios from 'axios';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from './constants';

import { apiCall } from './api/api';


export const setSearchField=(text)=>{
    // console.log(text)
    return {
    type:CHANGE_SEARCH_FIELD,
    payload:text
}}


export const requestRobots=()=>(dispatch)=>{
    dispatch({type:REQUEST_ROBOTS_PENDING})
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(axiosData=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:axiosData.data}))
    .catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
}