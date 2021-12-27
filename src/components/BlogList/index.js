// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(item => ({
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      author: item.author,
      topic: item.topic,
    }))

    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsList.map(eachItem => <BlogItem blogDetails={eachItem} />)
        )}
      </div>
    )
  }
}
export default BlogList
