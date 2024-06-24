import axios from "axios";
import { BASE_URL, DELETE_CONNECTION, DELETE_ELECTION, DELETE_PARTY, DELETE_VOTER, GET_CONNECTION, GET_ELECTION, GET_PARTY, GET_VOTER, POST_CONNECTION, POST_ELECTION, POST_PARTY, POST_VOTER } from "../constant";

// party

let get_party = async (action) => {
    // console.log(action, "getparty");
    let { data, status } = await axios.get(BASE_URL + GET_PARTY);
    return { data, status }

}

let post_party = async (action) => {
    // console.log(action, "api");
    let { data, status } = await axios.post(BASE_URL + POST_PARTY, action.payload);
    return { data, status }
}

let delete_party = async (action) => {
    // console.log(action, "api");
    let { data } = await axios.delete(BASE_URL + DELETE_PARTY + action.payload);
    return { data }
}

// voter

let get_voter = async (action) => {
    // console.log(action, "voter get api");
    let { data, status } = await axios.get(BASE_URL + GET_VOTER);
    return { data, status }
}

let post_voter = async (action) => {
    console.log(action, "api");
    let { data } = await axios.post(BASE_URL + POST_VOTER, action.payload);
    return { data }
    // console.log(res);
}

let delete_voter = async (action) => {
    console.log(action, "apidelete");
    let { data } = await axios.delete(BASE_URL + DELETE_VOTER + action.payload);
    // console.log(res, "delete voter");
    return { data }
}

// ELECTION

let get_election = async (action) => {
    // console.log(action, "api election");
    let { data, status } = await axios.get(BASE_URL + GET_ELECTION);
    return { data, status }
}

let post_election = async (action) => {
    console.log(action, "api");
    let { data } = await axios.post(BASE_URL + POST_ELECTION, action.payload);
    return { data };
}


let delete_election = async (action) => {
    console.log(action, "api");
    let { data } = await axios.delete(BASE_URL + DELETE_ELECTION + action.payload);
    return { data };
}

// party connection

let get_connection = async (action) => {
    console.log(action, "api");
    let { data } = await axios.get(BASE_URL + GET_CONNECTION);
    return { data };
}

let post_connection = async (action) => {
    let { data } = await axios.post(BASE_URL + POST_CONNECTION, action.payload);
    return { data }
}
let delete_connection = async (action) => {
    let { data } = await axios.delete(BASE_URL + DELETE_CONNECTION + action.payload);
    // console.log(res,"apiii");
    return { data };
}
export { get_party, post_party, delete_party, get_voter, post_voter, delete_voter, get_election, post_election, delete_election, get_connection, post_connection, delete_connection }