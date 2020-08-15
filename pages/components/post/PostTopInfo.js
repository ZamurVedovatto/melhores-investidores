import React from "react";

const PostTopInfo = (props) => {
  const { post } = props;

  return (
    <div className="jl_single_style1">
      <div className="single_content_header jl_single_feature_above">
        <div className="image-post-thumb jlsingle-title-above">
          <img width="1000" height="667" src={post.images[0]} className="attachment-disto_justify_feature size-disto_justify_feature wp-post-image" alt="" />
        </div>
      </div>
      <div className="single_post_entry_content single_bellow_left_align">
        <span className="meta-category-small single_meta_category">
          {post.categories.map((category) => (
            <a className="post-category-color-text" key={category} style={{ background: "#d1783c" }} href="post-layout-6.html#">{ category }</a>
          ))}
        </span> 
        <h1 className="single_post_title_main">{post.title}</h1>
        <span className="single-post-meta-wrapper">
          <span className="post-author">
            <span>
              <img src="/img/favicon-zamur.png" width="50" height="50" alt={post.author} className="avatar avatar-50 wp-user-avatar wp-user-avatar-50 alignnone photo" />
              <a href="post-layout-6.html#" title="Posts do autor" rel="author">{post.author}</a>
            </span>
          </span>
          <span className="post-date updated"><i className="fa fa-clock-o"></i>{post.date}</span>
        </span>
      </div>
    </div>
  )
}

export default PostTopInfo;