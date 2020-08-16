import Link from "next/Link";

const ArticleCard = (props) => {
  const { info } = props;

  return (
    <div className="box jl_grid_layout1 blog_grid_post_style post-4761 post type-post status-publish format-standard has-post-thumbnail hentry category-sports">
      {
        info &&
        <div className="post_grid_content_wrapper">
          <div className="image-post-thumb">
            <Link href={`artigos/${info.url}`}>
              <a className="link_image featured-thumbnail" title={info.title}>
                <img
                  width="780"
                  height="450"
                  src={info.images[0]}
                  className="attachment-disto_large_feature_image size-disto_large_feature_image wp-post-image"
                  alt={info.title}
                />
                <div className="background_over_image"></div>
              </a>
            </Link>
            <span className="meta-category-small">
              {info.categories &&
                info.categories.map((category) => (
                  <a
                    key={category}
                    className="post-category-color-text"
                    style={{ background: "#36c942" }}
                    href={`artigos&category=${category}`}
                  >
                    {category}
                  </a>
                ))}
            </span>
          </div>
          <div className="post-entry-content">
            <div className="post-entry-content-wrapper">
              <div className="large_post_content">
                <h3 className="image-post-title">
                  <a href={`/artigos/${info.url}`}>{info.title}</a>
                </h3>
                <span className="jl_post_meta">
                  <span className="jl_author_img_w">
                    <img
                      src="/img/favicon-zamur.png"
                      width="30"
                      height="30"
                      alt={info.author}
                      className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo"
                    />
                    <a title={`Artigos por ${info.author}`} rel="author">
                      {info.author}
                    </a>
                  </span>
                  <span className="post-date">
                    <i className="fa fa-clock-o"></i>
                    {info.date}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ArticleCard;
