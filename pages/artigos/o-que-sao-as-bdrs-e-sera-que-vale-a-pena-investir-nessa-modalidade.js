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
  const post = posts[7];

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
                      <p className={`${artigoStyles.subtitle}`}>
                        Antes de mais nada, o que são as BDRs?
                      </p>
                      <p>
                      <a uk-tooltip={openDict("BDR’s")} className={`${artigoStyles.dictLink}`}>BDR</a> é a sigla em inglês (Brazilian Depositary Receipts) para os certificados que representam <a uk-tooltip={openDict("ação")} className={`${artigoStyles.dictLink}`}>ações</a> emitidas por empresas em outros países, tais como as ações da Apple, Intel, Coca-Cola, Johnson & Johnson, Amazon, Netflix, etc.
                      </p>

                      <p>
                      Através das BDRs, o investidor pode negociar estes papéis diretamente na bolsa brasileira, assim como ele faria com ações listadas no BOVESPA como Vale (VALE3) , Banco do Brasil (BBAS3), Weg (WEGE3), ITAÚSA (ITSA4), Magazine Luiza (MGLU3), entre outras.
                      </p>
                      <p>
                      A palavrinha certificado citada acima causa um pouco de dúvida. Simplificando, podemos dizer que ao investir em uma BDR, você não está comprando diretamente as ações de empresas no exterior, mas sim títulos representativos desses papéis (o tal certificado). Estas ações existem e ficam em custódia em uma instituição financeira.
                      </p>

                      <p>
                        <img
                          className="wp-image-4861 alignleft"
                          src={post.images[1]}
                          alt=""
                          width="338"
                          height="423"
                        />
                        Devido ao fato de ser um certificado e não o papel da ação em si, o investidor deve considerar a <a uk-tooltip={openDict("liquidez")} className={`${artigoStyles.dictLink}`}>liquidez</a> deste papel antes de investir em qualquer BDR. Em síntese, quanto maior a liquidez, melhor para o investidor pois, assim que ele resolver negociar, seja compra ou venda, certamente encontrará alguém do outro lado querendo comprar ou vender. Um outro fator é a <a uk-tooltip={openDict("volatilidade")} className={`${artigoStyles.dictLink}`}>volatilidade</a> que as BDRs estão sujeitas, assim como qualquer outro investimento em <a uk-tooltip={openDict("renda variável")} className={`${artigoStyles.dictLink}`}>renda variável</a>.
                      </p>

                      
                      <p className={`${artigoStyles.subtitle}`}>
                        Então, vale a pena investir em BDRs?
                      </p>

                      <p>
                      Avesso às BDRs e ao <a uk-tooltip={openDict("investimento")} className={`${artigoStyles.dictLink}`}>investimento</a> em mercados estrangeiros, um dos maiores investidores brasileiros, o Luiz Barsi, considera que o mercado brasileiro está repleto de boas oportunidades, como podemos subtrair da seguinte passagem dita por ele quando perguntado sobre o investimento em ações estrangeiras: "a oportunidade (do investimento no Brasil) é melhor por que as peripécias de mercado se transformam com tanta velocidade que acaba-se gerando um clima de oportunidade mais intenso do que lá fora, onde as economias já mais estáveis".
                      </p>

                      <p>
                      Um outro fator interessante é a oportunidade que corretoras estão oferecendo aos brasileiros de se investir diretamente em ações de outros mercados. Um exemplo é a corretora <a href="https://www.avenue.us/" target="_blank" >Avenue Securities</a>. A criação de uma conta na Avenue e o envio de valores para a corretora é tão simples como nas corretoras nacionais (Rico, Clear, XP, Banco Inter, etc), assim como as operações de compra e venda de ações. Além disto, a Avenue oferece corretagem gratuita para até 10 operações por mês. Desta forma, o investidor, ao invés de comprar certificados, adquire diretamente os papéis das empresas.
                      </p>

                      <blockquote>
                        <p>
                        A oportunidade (do investimento no Brasil) é melhor por que as peripécias de mercado se transformam com tanta velocidade que acaba gerando um clima de oportunidade mais intenso que lá fora, onde as economias já mais estáveis.
                        </p>
                      </blockquote>

                      <p className={`${artigoStyles.subtitle}`}>Referências</p>
                      <p>
                        <a
                          href="https://www.sunoresearch.com.br/artigos/bdr-uma-forma-simples-de-investir-no-exterior/"
                          target="_blank"
                        >
                          Suno Research
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://www.infomoney.com.br/guias/bdr-brazilian-depositary-receipts/"
                          target="_blank"
                        >
                          Info Money
                        </a>
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
