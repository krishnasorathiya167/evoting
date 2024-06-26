import Swal from "sweetalert2";
import { GET_VOTE_ERROR, GET_VOTE_PENDING, GET_VOTE_SUCCESS, POST_VOTE_ERROR, POST_VOTE_PENDING, POST_VOTE_SUCCESS } from "./action";


let initialState = {
    user: [],
    isLoading: false,
    isError: null,
    add:null,
}

let userReducer = (state = initialState, action) => {
    console.log(action, "user reducer");

    switch (action.type) {
        case (GET_VOTE_PENDING, POST_VOTE_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        }

        case GET_VOTE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
        }

        case POST_VOTE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: state.user.concat(action.payload.data),
                add:Swal.fire({
                    title: "Sucess!",
                    text: "Vote is Successfully Added!",
                    icon: "success"
                  })
            }

        }

        case (GET_VOTE_ERROR, POST_VOTE_ERROR): {
            return {
                ...state,
                isLoading: false,
                isError:action.payload,
            }
        }

        default: {
            return {
                ...state
            }
        }
    }

}

export default userReducer;