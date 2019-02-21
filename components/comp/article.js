import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import {get_posts} from "../../actions/posts"

class Article extends React.Component {
  componentDidMount () {
    // const { dispatch } = this.props
    // console.log('test')
    // dispatch(get_posts(true))
    // this.result = startClock(dispatch)
  }
  changeState(e,flag){
      e.preventDefault();
      this.props.dispatch(get_posts(flag))
  }

  render(){
      console.log(this)
      return(
    <div>
        {/*<h1>{this.props.show.name}</h1>
       <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
  <img src={this.props.show.image.medium}/>*/}
        <h1>test {this.props.result.toString()}</h1>
        <a href="#" onClick={($event) => this.changeState($event,!this.props.result)}>click</a>
        
    </div>
    )
  }
}


///// container

const mapPostsToProps = state => {
    return{postDetail: state.posts.postDetail,
        result: state.posts.result
}}


export default connect(mapPostsToProps)(Article);
