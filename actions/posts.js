import fetch from 'isomorphic-unfetch'

export const GET_POSTS = "GET_POSTS"
export const get_posts = flag => dispatch => {
    return dispatch({
        type: GET_POSTS,
        flag
    })
}

export const fetch_posts = id => dispatch => {
    const res = fetch(`https://api.tvmaze.com/shows/${id}`)
    // const show = res.json()
    return fetch(`https://api.tvmaze.com/shows/${id}`).then((response)=>response.json())
    .then(data => dispatch({type: "FETCH_POSTS_SUCCESS",data}))

}