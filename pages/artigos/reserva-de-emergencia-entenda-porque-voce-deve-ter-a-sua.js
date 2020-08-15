import dynamic from "next/dynamic";
import artigoStyles from "./artigos.module.scss";
import Head from "next/head";
const LayoutComponent = dynamic(() => import("./../components/layout"));
const PostTopInfoComponent = dynamic(() =>
  import("./../components/post/PostTopInfo")
);
const PostHashsComponent = dynamic(() =>
  import("./../components/post/PostHashs")
);
const PostAuthorComponent = dynamic(() =>
  import("./../components/post/PostAuthor")
);
const PostSidebarComponent = dynamic(() =>
  import("./../components/post/PostSidebar")
);

export async function getStaticProps() {
  const postsData = await fetch("http://localhost:3000/api/posts");
  const dicionarioData = await fetch("http://localhost:3000/api/dicionario");
  const posts = await postsData.json();
  const dicionario = await dicionarioData.json();
  const post = posts[5];

  return {
    props: {
      post,
      posts,
      dicionario,
    },
  };
}

const Post = (props) => {
  const { post, posts, dicionario } = props;

  const openDict = (term) => {
    let significado = "";
    dicionario.forEach((termLoop) => {
      if (termLoop.termo.toLowerCase() === term.toLowerCase()) {
        significado = termLoop.conteudo[0];
      }
    });
    return significado;
  };

  return (
    <LayoutComponent>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="content_main clearfix jl_spost">
        <div className="container">
          <div className="row main_content">
            <div className="col-md-8 loop-large-post" id="content">
              <div className="widget_container content_page">
                <div className="post type-post status-publish format-standard has-post-thumbnail hentry category-crazy tag-food tag-inspiration">
                  <div className="single_section_content box blog_large_post_style">
                    <PostTopInfoComponent post={post} />

                    {/* <a uk-tooltip={openDict('TERMOAQUI')} className={`${artigoStyles.dictLink}`}>TERMOAQUI</a> */}

                    {/* Conteudo aqui */}
                    <div className="post_content">
                      <p>
                        Uma reserva de emergência é um montante reservado para
                        eventualidades e imprevistos, tais como problemas de
                        saúde, demissões, crises e eventuais momentos em que
                        nossos rendimentos são menores do que os esperados.
                      </p>

                      <p>
                        Mas antes de mais nada, você sabe por que devemos ter
                        uma reserva de emergência? O motivo primordial é
                        evitarmos dívidas e empréstimos. Este tipo de despesa
                        normalmente possui juros altíssimos e pode nos encrencar
                        ainda mais.
                      </p>
                      <p>
                        Por exemplo, caso você tenha um emprego que te remunere
                        em R$4.000,00 ao mês e as suas despesas mensais girem em
                        torno de R$3.500,00, como você faria para pagar essas
                        despesas se for demitido amanhã? Optando por um
                        empréstimo, momentaneamente você vai conseguir arcar com
                        suas despesas, mas logo o montante que você pegou
                        emprestado acabará e, além das despesas fixas mensais,
                        você agora tem as parcelas do empréstimo para quitar.
                      </p>

                      <p>
                        <img
                          className="wp-image-4861 alignleft"
                          src={post.images[1]}
                          alt=""
                          width="338"
                          height="423"
                        />
                        Agora, se a eventualidade da demissão citada acima
                        acontecesse e você tenha se preparado antes, criando uma
                        reserva de emergência que supra as suas necessidades
                        básicas por um período de 6 a 12 meses, você não
                        precisará recorrer a um empréstimo bancário e nem pedir
                        dinheiro para amigos ou familiares. Tendo a reserva de
                        emergência, você estará mais tranquilo em relação às
                        suas despesas enquanto você se adequa ao momento até
                        conquistar uma nova oportunidade de trabalho ou crie um
                        novo negócio.
                      </p>

                      <p>
                        Os valores da reserva de emergência devem ser alocados
                        em investimentos seguros e de alta{" "}
                        <a
                          uk-tooltip={openDict("liquidez")}
                          className={`${artigoStyles.dictLink}`}
                        >
                          liquidez
                        </a>
                        , desta forma, poderemos utilizá-los assim que houver
                        necessidade e sem ter uma surpresa inconveniente do
                        montante estar menor do que o investido.
                      </p>

                      <blockquote>
                        <p>
                          A bolsa de valores é o maior instrumento de
                          preservação de patrimônio e multiplicação de capital
                          ao longo do tempo, se soubermos escolher as ações
                          certas
                        </p>
                      </blockquote>

                      <p>
                        Um outro ponto importante é criar a nossa reserva de
                        emergência antes de começar a investir. Os investimentos
                        em{" "}
                        <a
                          uk-tooltip={openDict("renda variável")}
                          className={`${artigoStyles.dictLink}`}
                        >
                          renda variável
                        </a>{" "}
                        tem a qualidade de serem interessantes a médio e{" "}
                        <a
                          uk-tooltip={openDict("longo prazo")}
                          className={`${artigoStyles.dictLink}`}
                        >
                          longo prazo
                        </a>
                        , devido ao crescimento do valor patrimonial das
                        empresas, crescimento dos lucros, aquisições, entre
                        outros. A bolsa de valores é o maior instrumento de
                        preservação de patrimônio e multiplicação de capital ao
                        longo do tempo, se soubermos escolher as{" "}
                        <a
                          uk-tooltip={openDict("ação")}
                          className={`${artigoStyles.dictLink}`}
                        >
                          ações
                        </a>{" "}
                        certas.
                      </p>

                      <p>
                        Mas, caso você precise vender parte das suas ações para
                        quitar uma eventual emergência, o seu patrimônio pode
                        estar valendo menos do o que foi investido
                        (investimentos em ações/bolsa de valores são
                        investimentos de renda variável), e isso fará você
                        perder dinheiro. Além do mais, optando pelo{" "}
                        <a
                          uk-tooltip={openDict("value investing")}
                          className={`${artigoStyles.dictLink}`}
                        >
                          value investing
                        </a>{" "}
                        e/ou{" "}
                        <a
                          uk-tooltip={openDict("buy and hold")}
                          className={`${artigoStyles.dictLink}`}
                        >
                          buy and hold
                        </a>
                        , em poucos momentos devemos nos desfazermos de nossas
                        ações, e cobrir uma eventual emergência não é um deles.
                      </p>
                    </div>
                    {/* Fim - Conteudo aqui */}

                    <div className="clearfix"></div>
                    <div className="single_tag_share">
                      {post.hashtags && (
                        <PostHashsComponent hashtags={post.hashtags} />
                      )}
                      {/* <PostShare related={post.related} /> */}
                    </div>
                    {/* <PostRelateds  /> */}
                    <PostAuthorComponent author={post.author} />
                    {/* <PostAnchorLinks /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" id="sidebar">
              <PostSidebarComponent posts={posts} />
            </div>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Post;
