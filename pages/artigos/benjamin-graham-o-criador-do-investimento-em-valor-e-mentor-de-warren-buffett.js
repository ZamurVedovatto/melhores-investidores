import React from "react";
import artigoStyles from "./artigos.module.scss";
import Head from "next/head";
import Layout from "../../components/layout";
import PostTopInfo from "../../components/post/PostTopInfo";
import PostHashs from "../../components/post/PostHashs";
import PostAuthor from "../../components/post/PostAuthor";
import PostSidebar from "../../components/post/PostSidebar";
import Servers from "./../../constants/servers";
const api = Servers.api;

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
		<Layout>
			<Head>
				<title>{post.title}</title>
			</Head>
			<section className='content_main clearfix jl_spost'>
				<div className='container'>
					<div className='row main_content'>
						<div className='col-md-8 loop-large-post' id='content'>
							<div className='widget_container content_page'>
								<div className='post type-post status-publish format-standard has-post-thumbnail hentry category-crazy tag-food tag-inspiration'>
									<div className='single_section_content box blog_large_post_style'>
										<PostTopInfo post={post} />
										{/* Conteudo aqui */}
										<div className='post_content'>
											<p className={`${artigoStyles.subtitle}`}>
												Quem foi Benjamin Graham?
											</p>
											<p>
												Economista por formação, mentor de Warren Buffett e
												considerado o precursor da estratégia de investimento
												denominada{" "}
												<a
													uk-tooltip={openDict("buy and hold")}
													className={`${artigoStyles.dictLink}`}
												>
													Buy and Hold
												</a>
												. Graham é considerado um dos maiores investidores de
												todos os tempos.
											</p>
											<p>
												Nascido em Londres no ano de 1894, Graham perdeu o pai
												na infância e sentiu na pele a pobreza, após a sua
												família perder todas as economias na derrocada
												financeira que ficou conhecida como Bank Panic (pânico
												dos banqueiros).
											</p>
											<p>
												Ao invés de se tornar um coitado, Graham usou o período
												de sofrimento e pobreza para se tornar um ótimo
												estudante. Conquistou bolsa de estudos e se formou com
												louvor na Universidade de Columbia.
											</p>
											<blockquote>
												<p>
													As pessoas não conseguem prever o que irá acontecer no
													mercado de ações.
												</p>
											</blockquote>
											<p className={`${artigoStyles.subtitle}`}>
												Maturidade e criação do seu legado
											</p>
											<p>
												Aos 25 ele já possuía grande prestígio atuando em um
												emprego em{" "}
												<a
													uk-tooltip={openDict("wall street")}
													className={`${artigoStyles.dictLink}`}
												>
													Wall Street
												</a>
												. Porém, em mais um revés na sua vida, sente a falência
												novamente na pele, perdendo quase todos os seus{" "}
												<a
													uk-tooltip={openDict("investimento")}
													className={`${artigoStyles.dictLink}`}
												>
													investimentos
												</a>{" "}
												durante a{" "}
												<a
													uk-tooltip={openDict("crise de 1929")}
													className={`${artigoStyles.dictLink}`}
												>
													crise de 1929
												</a>
												.
											</p>
											<p>
												Como lição tirada após esse momento e após se reerguer,
												escreve junto a David Dodd o livro que hoje é
												considerado um dos mais importantes sobre{" "}
												<a
													uk-tooltip={openDict("análise fundamentalista")}
													className={`${artigoStyles.dictLink}`}
												>
													Análise Fundamentalista
												</a>
												, intitulado Security Analysis.
											</p>
											<blockquote>
												<p>
													Uma operação de investimento é aquela que, por meio da
													análise, promete segurança para o principal e um
													retorno adequado. As operações que não vão ao encontro
													destas exigências são especulativas.
												</p>
											</blockquote>
											<p className={`${artigoStyles.subtitle}`}>
												O investidor inteligente
											</p>
											<p>
												Porém, sua maior obra seria lançada em 1949. O
												Investidor Inteligente é leitura fundamental para
												investidores do{" "}
												<a
													uk-tooltip={openDict("value investing")}
													className={`${artigoStyles.dictLink}`}
												>
													Value Investing
												</a>
												. Nesta obra, Graham cunha o método onde deve-se
												analisar os{" "}
												<a
													uk-tooltip={openDict("balanço patrimonial")}
													className={`${artigoStyles.dictLink}`}
												>
													balanços patrimoniais
												</a>{" "}
												e o{" "}
												<a
													uk-tooltip={openDict("fluxo de caixa")}
													className={`${artigoStyles.dictLink}`}
												>
													fluxo de caixa
												</a>{" "}
												da empresa para saber se a sua{" "}
												<a
													uk-tooltip={openDict("ação")}
													className={`${artigoStyles.dictLink}`}
												>
													ação
												</a>{" "}
												estava cara ou barata.
											</p>
											<p>
												<img
													className='wp-image-4861 alignleft'
													src={post.images[1]}
													alt=''
													width='338'
													height='423'
												/>
											</p>
											<p>
												Estes princípios buscam evitar perdas e auxiliam o
												investidor a ter uma maior disciplina emocional.
											</p>
											<p>
												Investindo em ações que possuem{" "}
												<a
													uk-tooltip={openDict("cotação")}
													className={`${artigoStyles.dictLink}`}
												>
													cotações
												</a>{" "}
												menores que o seu{" "}
												<a
													uk-tooltip={openDict("valor intrínseco")}
													className={`${artigoStyles.dictLink}`}
												>
													valor intrínseco
												</a>
												, ou seja, com maior{" "}
												<a
													uk-tooltip={openDict("margem de segurança")}
													className={`${artigoStyles.dictLink}`}
												>
													margem de segurança
												</a>
												, tendem a manter o investidor mais tranquilo do que
												aqueles que compraram ações nos topos pensando que
												aquele papel iria se valorizar ainda mais.
											</p>
											<p className={`${artigoStyles.subtitle}`}>
												Lição principal
											</p>
											<p>
												Além da margem de segurança, Graham considerava ações
												como negócios e não como{" "}
												<a
													uk-tooltip={openDict("ativo")}
													className={`${artigoStyles.dictLink}`}
												>
													ativos
												</a>{" "}
												<a
													uk-tooltip={openDict("especulação financeira")}
													className={`${artigoStyles.dictLink}`}
												>
													especulativos
												</a>
												.
											</p>
											<p>
												Ainda hoje os seus ensinamentos são considerados
												extremamente válidos, atemporais e essenciais para que
												um investidor chegue ao sucesso ao longo prazo. E a
												lição principal é a de que o mercado não pode ditar as
												nossas decisões de investimento.
											</p>
											<p className={`${artigoStyles.subtitle} `}>Referências</p>
											<p className={`${artigoStyles.referencias}`}>
												<a
													href='https://portaleducando.com/o-guru-da-analise-fundamentalista/'
													target='_blank'
												>
													Portal Educando
												</a>
											</p>
											<p className={`${artigoStyles.referencias}`}>
												<a
													href='https://sejamidas.com/margem-de-seguranca-em-acoes/'
													target='_blank'
												>
													Seja Mídas
												</a>
											</p>
											<p className={`${artigoStyles.referencias}`}>
												<a
													href='https://clubedovalor.com.br/benjamin-graham/'
													target='_blank'
												>
													Clube do Valor
												</a>
											</p>
										</div>
										{/* Fim - Conteudo aqui */}

										<div className='clearfix'></div>
										<div className='single_tag_share'>
											{post.hashtags && <PostHashs hashtags={post.hashtags} />}
											{/* <PostShare related={post.related} /> */}
										</div>
										{/* <PostRelateds  /> */}
										<PostAuthor author={post.author} />
										{/* <PostAnchorLinks /> */}
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-4' id='sidebar'>
							<PostSidebar posts={posts} />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

Post.getInitialProps = async (context) => {
	const postsData = await fetch(`${api}/api/posts`);
	const dicionarioData = await fetch(`${api}/api/dicionario`);
	const posts = await postsData.json();
	const dicionario = await dicionarioData.json();
	const post = posts[2];

	return {
		post,
		posts,
		dicionario,
	};
};

export default Post;
