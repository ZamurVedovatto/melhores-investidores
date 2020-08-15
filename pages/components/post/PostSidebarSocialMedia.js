const { Component } = require("react");

class PostSidebarSocialMedia extends Component {
  render() {
    return(
      <div style={{ display: "none" }} id="socialcountplus-2" className="widget widget_socialcountplus">
        <div className="social-count-plus">
          <ul className="default">
            <li className="count-facebook">
              <a className="icon" href="https://www.facebook.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">likes</span></span>
            </li>
            <li className="count-instagram">
              <a className="icon" href="https://instagram.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
            </li>
            <li className="count-pinterest">
              <a className="icon" href="https://www.pinterest.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
            </li>
            <li className="count-twitch">
              <a className="icon" href="http://www.twitch.tv//profile" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
            </li>
            <li className="count-twitter">
              <a className="icon" href="https://twitter.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
            </li>
            <li className="count-vimeo">
              <a className="icon" href="https://vimeo.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
            </li>
            <li className="count-youtube">
              <a className="icon" href="post-layout-6.html" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">subscribers</span></span>
            </li>
            <li className="count-linkedin">
              <a className="icon" href="https://www.linkedin.com/company/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PostSidebarSocialMedia;