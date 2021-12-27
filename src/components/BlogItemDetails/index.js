// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoadingI: true}

  componentDidMount() {
    this.getBlogsDetails()
  }

  getBlogsDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogsData: updatedData, isLoadingI: false})
  }

  render() {
    const {blogsData, isLoadingI} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogsData

    return isLoadingI ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="d-flex flex-column p-2 m-2">
        <h1 className="headingMain pb-2">{title}</h1>
        <div className="d-flex flex-row align-items-center pb-2">
          <img src={avatarUrl} alt="avatar" className="avatarImg" />
          <p className="authorPara">{author}</p>
        </div>
        <img src={imageUrl} alt="title" className="mainImg" />
        <p className="authorPara pt-2">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
