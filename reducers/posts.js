import {GET_POSTS} from "../actions/posts.js"

const initPosts = {postDetail: {},result:false}

export default function(state=initPosts, action) {
    switch (action.type){
        case GET_POSTS:
        return { ...state,result:action.flag};
        case "FETCH_POSTS_SUCCESS":
        return {...state,postDetail:action.data}
        default:
        return state;
    }
    
}