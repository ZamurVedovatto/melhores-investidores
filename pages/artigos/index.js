import dynamic from "next/dynamic";
const LayoutComponent = dynamic(() => import("./../components/layout"));
const ArticleCardComponent = dynamic(() =>
  import("./../components/article/ArticleCard")
);

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/posts");
  const posts = await data.json();
  return {
    props: {
      posts,
    },
  };
}

const ArtigoMain = (props) => {
  // TODO carregar params para selecionar posts por categories
  // https://nextjs.org/docs/routing/dynamic-routes
  const { posts } = props;

  return (
    <LayoutComponent>
      <div className="jl_post_loop_wrapper jl_grid_4col_home">
        <div className="container" id="wrapper_masonry">
          <div className="row">
            <div className="col-md-12 grid-sidebar">
              <div className="jl_wrapper_cat">
                <div id="content_masonry">
                  {posts &&
                    posts.map((post) => (
                      <ArticleCardComponent key={post.id} info={post} />
                    ))}
                </div>
              </div>
              {/* TODO  colocar infinite scrool aqui */}
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default ArtigoMain;
