import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";
import {CHANGE_FOLLOWERS, CHANGE_FOLLOWING} from "../actions/statsActions";

const defaultState = {
    user :{
        name: 'monster',
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid'
    },
    stats :{
        followers:0,
        following:0
    }
}

 const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state,user:{...state.user,name:action.payload||state.user.name}}
        case CHANGE_AVATAR:
            return {...state,user:{...state.user,avatar:action.payload||state.user.avatar}}
        default:
            return state;
    }
}

 const statsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOWERS:{
            if (action.payload < 0 && state.stats.followers === 0){
                return state
            }
            return {...state,stats:{...state.stats,followers:state.stats.followers + action.payload}}
        }
        case CHANGE_FOLLOWING:{
            if (action.payload < 0 && state.stats.following === 0){
                return state
            }
            return {...state,stats:{...state.stats,following:state.stats.following + action.payload}}
        }

        default:
            return state;
    }
}

function combReducers(reducers) {
    const reducerKeys = Object.keys(reducers)
    return function combination(state = defaultState, action) {
        let nextState = state;
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];

            nextState = reducer(nextState,action);
        }
        return nextState

    }
}

export const rootReducer = combReducers({userReducer,statsReducer});