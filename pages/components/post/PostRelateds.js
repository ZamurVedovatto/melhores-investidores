const { Component } = require("react");

class PostRelateds extends Component {
  render() {
    return (      
      <>
        <div className="postnav_left">
          <div className="single_post_arrow_content"> <a href="post-layout-6.html#" id="prepost">The best inspiration painting and fast in the world<span className="jl_post_nav_left">Artigo anterior</span></a>
          </div>
        </div>
        <div className="postnav_right">
          <div className="single_post_arrow_content"> <a href="post-layout-6.html#" id="nextpost">Sometime reading can me you feel relaxed<span className="jl_post_nav_left">Próximo Artigo</span></a>
          </div>
        </div>
      </>
    )
  }
}

export default PostRelateds;