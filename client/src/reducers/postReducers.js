import { FETCH_POSTS, GET_POST, ERROR_POST, POST_LOADING, POST_LOADED } from '../actions/types';

const initialState={
    items:[],
    // item:localStorage.getItem('item'),
    item:{},
    price:localStorage.getItem('price'),
    itemerr:{},
    postLoading: false
}
export default function(state=initialState,action){
    switch(action.type){
        case POST_LOADING:
        return{
            ...state,
            postLoading:true
            }
        case POST_LOADED:
        return{
            ...state,
            postLoading:false
            }
        case FETCH_POSTS:
        localStorage.removeItem('price')
        return {
            ...state,
            items:action.payload
        };
        case GET_POST:
        localStorage.setItem('price', action.payload.selling_rate)
        // localStorage.setItem('item', JSON.stringify(action.payload))
        return {
            ...state,
            item:action.payload
        };
        
        case ERROR_POST:
        return {
            ...state,
            itemerr:action.payload
        };
        default:
        return state;
    };
}