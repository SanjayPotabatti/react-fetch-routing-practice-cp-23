// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blogItemContainer m-2 p-2 d-flex flex-column justify-content-center">
        <img src={imageUrl} className="imgStyle" alt={topic} />
        <p className="paraTopic p-2">{topic}</p>
        <h1 className="headingTitle">{title}</h1>
        <div className="d-flex flex-row align-items-center">
          <img src={avatarUrl} alt="avatar" className="authorImg" />
          <p className="paraTopic pl-2">{author}</p>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
