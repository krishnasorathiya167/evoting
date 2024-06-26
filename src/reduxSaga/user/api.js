import axios from "axios";
import { BASE_URL, GET_VOTE, POST_VOTE } from "../constant";

//vote 
let get_vote = async (action) => {
    console.log(action, "api");
    let { data, status } = await axios.get(BASE_URL + GET_VOTE);
    // console.log(res, "api");
    return { data, status }
}

let post_vote = async (action) => {
    console.log(action, "api post");
    let {data} = await axios.post(BASE_URL + POST_VOTE, action.payload);
    return {data}
}
export { get_vote, post_vote }