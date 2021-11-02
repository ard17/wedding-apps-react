import * as ActionType from '../constants/user';

const INIT_STATE = {
    username: "",
    email: "",
    role_type: "",
    status: false,
    isLoading: false,
    profile : {
        userId: undefined,
        username: "",
        email: "",
        roleType: ""
    },
    token : ""
}

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.ADD_SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.ADD_SIGNUP_SUCCEED:
            return applyAddSignupSucceed(state, action);
        case ActionType.SIGNUP_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case ActionType.GET_SIGNIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_SIGNIN_SUCCEED: {
            return applyGetSigninSucceed(state,action)
        }
        default:
            return state;
    }
}

//action reducer
const applyAddSignupSucceed = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        username: payload.user_name,
        email: payload.user_email,
        role_type: payload.user_role_type,
        isLoading: false,
        status: true
    }
}

const applyGetSigninSucceed = (state, action) => {
    const {payload} = action;
    const {profile} = payload
    return {
        ...state,
        profile : {
            userId : profile.userId,
            username : profile.username,
            email : profile.email,
            roleType : profile.roleType
        },
        isLoading: false,
        status : true,
        token : payload.token
    }
}

export default userReducer;