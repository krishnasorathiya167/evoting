import { DELETE_CONNECTION_ERROR, DELETE_CONNECTION_PENDING, DELETE_CONNECTION_SUCCESS, DELETE_ELECTION_ERROR, DELETE_ELECTION_PENDING, DELETE_ELECTION_SUCCESS, DELETE_PARTY_ERROR, DELETE_PARTY_PENDING, DELETE_PARTY_SUCCESS, DELETE_VOTER_ERROR, DELETE_VOTER_PENDING, DELETE_VOTER_SUCCESS, GET_CONNECTION_ERROR, GET_CONNECTION_PENDING, GET_CONNECTION_SUCCESS, GET_ELECTION_ERROR, GET_ELECTION_PENDING, GET_ELECTION_SUCCESS, GET_PARTY_ERROR, GET_PARTY_PENDING, GET_PARTY_SUCCESS, GET_VOTER_ERROR, GET_VOTER_PENDING, GET_VOTER_SUCCESS, POST_CONNECTION_ERROR, POST_CONNECTION_PENDING, POST_CONNECTION_SUCCESS, POST_ELECTION_SUCCESS, POST_PARTY_ERROR, POST_PARTY_PENDING, POST_PARTY_SUCCESS, POST_VOTER_ERROR, POST_VOTER_PENDING, POST_VOTER_SUCCESS } from "./action";
import Swal from "sweetalert2";

let initialState = {
    party: [],
    voter: [],
    election: [],
    connection: [],
    isLoading: false,
    isError: null,
    alert:null,
}

let adminReducer = (state = initialState, action) => {

    console.log(action, "reduser");

    switch (action.type) {
        case (GET_PARTY_PENDING, POST_PARTY_PENDING, DELETE_PARTY_PENDING, GET_VOTER_PENDING, POST_VOTER_PENDING, DELETE_VOTER_PENDING, GET_ELECTION_PENDING, DELETE_ELECTION_PENDING, GET_CONNECTION_PENDING, POST_CONNECTION_PENDING, DELETE_CONNECTION_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        }
        // party
        case GET_PARTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                party: action.payload.data,
            }
        }
        case POST_PARTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                party: state.party.concat(action.payload.data),
                alert:Swal.fire({
                    title: "Sucess!",
                    text: "Your Data is Successfully Added!",
                    icon: "success"
                  })
            }
        }
        case DELETE_PARTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                party: state.party.filter((val) => val._id != action.payload)
            }
        }

        //voter

        case GET_VOTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                voter: action.payload.data,
            }
        }
        case POST_VOTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                voter: state.voter.concat(action.payload)
            }
        }
        case DELETE_VOTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                voter: state.voter.filter((val) => val._id != action.payload)
            }
        }

        // election

        case GET_ELECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                election: action.payload.data,
            }
        }
        case POST_ELECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                election: state.election.concat(action.payload),
            }
        }
        case DELETE_ELECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                election: state.election.filter((val) => val._id != action.payload)
            }
        }

        // connection

        case GET_CONNECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                connection: action.payload,
            }
        }
        case POST_CONNECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                connection: state.connection.concat(action.payload)
            }
        }
        case DELETE_CONNECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                connection: state.connection.filter((val) => val._id != action.payload)
            }
        }
        case (GET_PARTY_ERROR, POST_PARTY_ERROR, DELETE_PARTY_ERROR, GET_VOTER_ERROR, POST_VOTER_ERROR, DELETE_VOTER_ERROR, GET_ELECTION_ERROR, DELETE_ELECTION_ERROR, GET_CONNECTION_ERROR, POST_CONNECTION_ERROR, DELETE_CONNECTION_ERROR): {
            return {
                ...state,
                isLoading: false,
                isError: action.payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}

export default adminReducer;