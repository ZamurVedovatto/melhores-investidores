const { Component, useState, useEffect } = require("react");
import ArticleRecentCard from "../article/ArticleRecentCard";

const PostSidebarPosts = (props) => {
  const { posts } = props;

  return(
    <div id="disto_recent_post_widget-7" className="widget post_list_widget">
      <div className="widget_jl_wrapper"><span className="jl_none_space"></span>
        <div className="widget-title">
          <h2>Artigos Recentes</h2>
        </div>
        <div>
          <ul className="feature-post-list recent-post-widget">
            {
              posts && posts.map(post => 
                <ArticleRecentCard key={post.id} post={post} />
              )
            }
          </ul>
        </div>
        <span className="jl_none_space"></span>
      </div>
    </div>
  )
}

export default PostSidebarPosts;