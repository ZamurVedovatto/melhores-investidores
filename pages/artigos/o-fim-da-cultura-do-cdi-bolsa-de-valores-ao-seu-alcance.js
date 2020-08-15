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
											<p>
												De alguns anos para cá a cultura do{" "}
												<a
													uk-tooltip={openDict("cdi")}
													className={`${artigoStyles.dictLink}`}
												>
													CDI
												</a>{" "}
												vem chegando ao seu fim. A taxa de juros referencial{" "}
												<a
													uk-tooltip={openDict("selic")}
													className={`${artigoStyles.dictLink}`}
												>
													SELIC
												</a>{" "}
												está no nível mais baixo da história: 2,25% ao ano
												(valor atualizado em 17 de junho de 2020). Entre julho
												de 2015 e agosto de 2016, esta taxa estava em elevados
												14,25% ao ano.
											</p>
											<p>
												Em 2015, um investimento em{" "}
												<a
													uk-tooltip={openDict("tesouro selic")}
													className={`${artigoStyles.dictLink}`}
												>
													Tesouro SELIC
												</a>{" "}
												rendendo 100% do CDI ao ano (14,25%), poderia ser
												considerado um ótimo negócio. Era um rendimento de alta
												liquidez, alto rendimento e baixo risco.
											</p>
											<p>
												Em termos de comparação, Warren Buffett, um dos maiores
												investidores de todos os tempos, tem uma média anual em
												torno de 20% de valorização do seu patrimônio e dos seus
												investimentos.
											</p>
											<blockquote>
												<p>
													É preciso que o investidor aumente o risco do seu
													capital e o horizonte de prazo para os investimentos.
												</p>
											</blockquote>
											<p className={`${artigoStyles.subtitle}`}>
												Mas então, o que significa o fim da cultura do CDI e o
												que você, investidor, tem a ver com isso?
											</p>
											<p>
												<img
													className='wp-image-4861 alignleft'
													src={post.images[1]}
													alt=''
													width='338'
													height='423'
												/>
												A economia brasileira sempre foi indexada e atrelada à
												taxa de juros do CDI. O rendimento das aplicações
												financeiras tem como{" "}
												<a
													uk-tooltip={openDict("benchmark")}
													className={`${artigoStyles.dictLink}`}
												>
													benchmark
												</a>{" "}
												princiapal o CDI. Por exemplo,{" "}
												<a
													uk-tooltip={openDict("cdb")}
													className={`${artigoStyles.dictLink}`}
												>
													CDBs
												</a>{" "}
												e títulos públicos sempre tiveram o seu desempenho
												medido em comparação com o percentual do{" "}
												<a
													uk-tooltip={openDict("cdi")}
													className={`${artigoStyles.dictLink}`}
												>
													CDI
												</a>
												.
											</p>
											<p>
												O fim da cultura do CDI quer dizer que o dinheiro
												aplicado no banco em juros pós-fixados agora rende muito
												menos do que antes. Atualmente, para buscar maiores
												rendimentos, o investidor precisa aumentar sua exposição
												a investimentos de maiores riscos, e passar a investir
												na bolsa de valores. E, neste cenário, é fundamental
												aprender a investir em{" "}
												<a
													uk-tooltip={openDict("ação")}
													className={`${artigoStyles.dictLink}`}
												>
													Ações
												</a>{" "}
												e em{" "}
												<a
													uk-tooltip={openDict("Fundos Imobiliários/FII")}
													className={`${artigoStyles.dictLink}`}
												>
													FIIs
												</a>
												.
											</p>
											<p>
												Tendo um olhar mais positivo e até otimista demais,
												considero que hoje o Brasil tem condições para o
												fortalecer o crescimento da economia, pois temos nomes
												fortes no Banco Central e no Ministério da Fazenda e um
												ambiente externo favorável, com baixa aversão ao risco e
												alta liquidez global. Isto favorece o crescimento das
												nossas organizações e um potencial aumento dos seus
												lucros, o que reflete diretamente na valorização dos
												papéis das companhias listadas na Bovespa.
											</p>
											<p>
												Com o fim da cultura do CDI, o retorno das aplicações
												financeiras deve ser pensado em termos absolutos ao ano,
												isto é, em termos reais descontada a inflação. É preciso
												que o investidor aumente o risco do seu capital e o
												horizonte de prazo para os investimentos.
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
	const post = posts[3];

	return {
		post,
		posts,
		dicionario,
	};
};

export default Post;
