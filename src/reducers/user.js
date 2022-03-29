export const initialState = {
    isLogined: false,
    user: null,
    signUpdata: {},
    loginData: {}
};

export const loginAction = (data) => {
    return {
        type: 'LOGIN',
        data
    };
};

export const logoutAction = { type: 'LOGOUT' };

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'LOGIN' :
        return {
            ...state.user,
            isLogined: true,
            user: action.data
        };
    case 'LOGOUT' :
        return {
            ...state.user,
            isLogined: false,
            user: null
        };
    default:
        return state;
    }
};

export default reducer;