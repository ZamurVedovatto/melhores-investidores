const { Component } = require("react");

class PostShare extends Component {
  render() {
    return (
      <>
        <div className="single_post_share_icons">Compartilhar<i className="fa fa-share-alt"></i>
        </div>

        <div className="single_post_share_wrapper">
          <div className="single_post_share_icons social_popup_close"><i className="fa fa-close"></i>
          </div>
          <ul className="single_post_share_icon_post">
            <li className="single_post_share_facebook"><a href="post-layout-6.html#" target="_blank"><i className="fa fa-facebook"></i></a>
            </li>
            <li className="single_post_share_twitter"><a href="post-layout-6.html#" target="_blank"><i className="fa fa-twitter"></i></a>
            </li>
            <li className="single_post_share_pinterest"><a href="post-layout-6.html#" target="_blank"><i className="fa fa-pinterest"></i></a>
            </li>
            <li className="single_post_share_linkedin"><a href="post-layout-6.html#" target="_blank"><i className="fa fa-linkedin"></i></a>
            </li>
            <li className="single_post_share_ftumblr"><a href="post-layout-6.html#" target="_blank"><i className="fa fa-tumblr"></i></a>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default PostShare;