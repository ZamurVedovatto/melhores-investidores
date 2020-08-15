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
  const post = posts[1];

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
                    {/* Conteudo aqui */}
                    <div className="post_content">
                      <p className={`${artigoStyles.subtitle}`}>
                        Afinal, quem é Warren Buffett?
                      </p>
                      <p>
                        Considerado um dos maiores investidores do mercado
                        financeiro de todos os tempos e também uma das pessoas
                        mais ricas do mundo.
                      </p>
                      <p>
                        Grande parte do seu patrimônio vem da sua participação
                        como presidente e principal{" "}
                        <span className={`${artigoStyles.dictLink}`}>
                          acionista
                        </span>{" "}
                        da Berkshire Hathaway, empresa que tem a história de
                        crescimento aliada às estratégias utilizadas por Warren
                        Buffett no decorrer das últimas cinco décadas.
                      </p>
                      <blockquote>
                        <p>
                          Regra número um: nunca perca dinheiro. Regra número
                          dois: nunca se esqueça da regra número um.
                        </p>
                      </blockquote>
                      <p>
                        Para se ter uma idéia, as estratégias de investimento de
                        Buffett na Berkshire Hathaway tem tido retorno médio de
                        20% ao ano, batendo (e com sobra), os índices S&P e Dow
                        Jones.
                      </p>
                      <p className={`${artigoStyles.subtitle}`}>
                        Um pouco de história
                      </p>
                      <p>
                        Filho de uma editora de jornais e de um corretor de
                        ações, desde cedo Warren Buffet já mostrava sinais de
                        que teria grandes conquistas no mundo dos investimentos.
                        Aos sete anos de idade, enquanto a grande maioria não
                        demonstra sinais de noções financeiras, ele leu o livro
                        1.000 formas de ganhar US$1.000,00 e, a partir daí, sua
                        sede de leitura se tornou insaciável e um dos maiores
                        pilares do seu conhecimento.
                      </p>
                      <p>
                        Para complementar a renda, pois recebia 5 centavos de
                        dólar por semana dos pais, passou a entregar jornais e
                        vender de tudo, desde chicletes a garrafas de Coca-Cola.
                      </p>
                      <p>
                        <img
                          className="wp-image-4861 alignleft"
                          src={post.images[1]}
                          alt=""
                          width="338"
                          height="423"
                        />
                        Aos 11 anos de idade ele fez sua primeira aquisição na
                        bolsa. Foram três ações da Cities Services (atual
                        Citgo). Aos 13, fez sua primeira declaração de imposto
                        de renda, recebendo 35 dólares de restituição. Ao final
                        da sua adolescência, Buffett já acumulava um patrimônio
                        de 9.800 dólares que, corrigidos para a data de hoje,
                        equivale a nada mais, nada menos, do que 100 mil
                        dólares. Incrível, não?
                      </p>
                      <p className={`${artigoStyles.subtitle}`}>
                        Aprendendo com os melhores
                      </p>
                      <p>
                        Buffett formou-se em administração pela Universidade de
                        Nebraska. Em uma reviravolta após ser negado por Harvard
                        pela continuidade dos seus estudos, Warren escreveu para
                        o economista e professor da Universidade de Columbia,
                        David Dodd, e foi aprovado e aceito para fazer o seu
                        mestrado. Foi nesse período que ele conheceu o pai do
                        value investing, Benjamin Graham.
                      </p>
                      <p>
                        Sua forte influência deu base ao estilo de investimentos
                        de Warren Buffett: um investidor deve analisar os
                        fundamentos das empresas e comprar as suas ações,
                        preferencialmente, quando estiverem baratas. Este último
                        ponto é de forte influência do pensamento de Graham.
                        Após a conclusão dos estudos, Warren continuou junto à
                        Graham atuando como analista de seguros por dois anos.
                      </p>
                      <p>
                        Um fato curioso, mas que vale para abrirmos um pouco
                        nossas mentes, é que a formação que dá maior orgulho à
                        Buffet é a de um curso de oratória realizado na escola
                        Dale Carnegie.
                      </p>
                      <p></p>
                      <blockquote>
                        <p>
                          A diferença entre pessoas bem-sucedidas e pessoas
                          realmente bem-sucedidas é que as realmente
                          bem-sucedidas dizem não para quase tudo.
                        </p>
                      </blockquote>
                      <p className={`${artigoStyles.subtitle}`}>
                        Fundação da Buffett Partnership LTDA
                      </p>
                      <p>
                        Junto a familiares e sócios e com um capital de
                        aproximadamente 105 mil dólares, Buffet fundou o seu
                        primeiro fundo de investimentos. Seis anos depois, a
                        firma já valia mais de 7 milhões de dólares. Por mais de
                        uma década, o retorno anual dos investimentos foi de
                        24,5%, superando em muito os 7,4% do mercado
                        norte-americano.
                      </p>
                      <p className={`${artigoStyles.subtitle}`}>
                        Método de Investimento
                      </p>
                      <p>
                        "Juros compostos são a força mais poderosa do universo".
                        Frase amplamente utilizado por Buffett e de autoria
                        atribuída a Albert Einstein. Buffett usa a estratégia do
                        buy and hold. Tendo em vista as empresas bem
                        caracterizadas em suas análises fundamentalistas, Buffet
                        aproveita de períodos de baixa nos mercados para comprar
                        papéis destas empresas.
                      </p>
                      <p>
                        Uma empresa centenária do setor têxtil, chamada
                        Berkshire Hathaway, passava por dificuldades e estava
                        sendo negociada a valores baixos no começo da década de
                        1960 e foi alvo dos investimentos de Buffett. Ele
                        considerava que ela ainda poderia gerar lucro. Após
                        certas desavenças com o presidente da empresa, Buffett
                        passou a adquirir mais e mais ações da Berkshire
                        Hathaway, até assumir o controle da empresa e demitir
                        toda a diretoria.
                      </p>
                      <p>
                        <img
                          className="wp-image-4861 alignleft"
                          src={post.images[2]}
                          alt=""
                          width="338"
                          height="423"
                        />
                      </p>
                      <p>
                        Tendo o controle da empresa, passou a diversificar os
                        negócios da empresa e entrou no setor de seguros, ramo
                        em que tinha vasto conhecimento.Foi nesse momento que a
                        Buffer Partnership foi encerrada e a Berkshire se
                        converteu a uma holding.
                      </p>
                      <p>
                        Nos anos seguintes, Buffett aumenta o guarda-chuvas da
                        holding e passou a investir mais e mais em grandes
                        companhias, tais como bancos e financeiras como Wells
                        Fargo, Goldman Sachs, JP Morgan Chase, Bank of America,
                        Visa e Mastercard, empresas globais como a Coca-Cola,
                        Johnson & Johnson, American Airlines e General Motors,
                        entre outras.
                      </p>
                      <p>
                        Atualmente, a Berkshire Hathaway possui um valor de
                        mercado superior a 500 bilhões de dólares, ficando atrás
                        somente da Microsoft, Apple, Amazon e Facebook.
                      </p>
                      <p className={`${artigoStyles.subtitle}`}>Referências</p>
                      <p>
                        <a
                          href="https://comoinvestir.thecap.com.br/grandes-investidores-de-sucesso-bolsa/"
                          target="_blank"
                        >
                          The Cap
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://www.infomoney.com.br/perfil/warren-buffett/"
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
