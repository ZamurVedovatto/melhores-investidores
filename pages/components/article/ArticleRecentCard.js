import Link from "next/Link";

const ArticleRecentCard = (props) => {
  const { post } = props;
  
  return (
    <li>
      {
        post &&
        <Link href={post.url} >
        <a className="jl_small_format feature-image-link image_post featured-thumbnail" title={post.title}>
          <img width="120" height="120" src={post.images[0]} className="attachment-disto_small_feature size-disto_small_feature wp-post-image" alt={post.title} />
          <div className="background_over_image"></div>
        </a>
      </Link>
      }

      {
        post &&
        <div className="item-details">
        <span className="meta-category-small">
          {
            post.categories && post.categories.map(category => 
              <a key={category} className="post-category-color-text" style={{ background: "#d800f9" }}>
                {category}
              </a>
            )
          }
        </span> 
        <h3 className="feature-post-title">
          <Link href={post.url} >
            <a>{post.title}</a>
          </Link>
        </h3>
        <span className="post-meta meta-main-img auto_image_with_date">
          <span className="post-date"><i className="fa fa-clock-o"></i>{post.date}</span>
        </span>
      </div>
      }

    </li>
  )
}

export default ArticleRecentCard;