import Layout from '../components/layout/main'
import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import {get_posts, fetch_posts} from "../actions/posts"
import Article from "../components/comp/article"


class Post extends React.Component {
static async getInitialProps ({reduxStore, query}) {
    // const { id } = context.query
    // const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    // const show = await res.json()
    // console.log(show)

    console.log(`Fetched show:`)
    console.log(query)
    // console.log(reduxStore.getState())

    await reduxStore.dispatch(fetch_posts(query.id))
    console.log(reduxStore.getState().posts)
    return {...reduxStore.getState().posts}

    // return { show }
  }
  componentDidMount () {
    const { dispatch } = this.props
    console.log('test')
    // dispatch(get_posts(true))
    // this.result = startClock(dispatch)
  }
//   changeState(e,flag){
//       e.preventDefault();
//       this.props.dispatch(get_posts(flag))
//   }

  render(){
      console.log(this)
      return(
    <Layout>
        {/*<h1>{this.props.show.name}</h1>
       <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
  <img src={this.props.show.image.medium}/>*/}
  <Article />
  {this.props.postDetail.name}

    </Layout>
    )
  }
}


///// container

// const mapPostsToProps = state => {
//     return{
//         postDetail: state.posts.postDetail,
//         result: state.posts.result
// }}


export default connect()(Post);
