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

										{/* <a uk-tooltip={openDict('TERMOAQUI')} className={`${artigoStyles.dictLink}`}>TERMOAQUI</a> */}

										{/* Conteudo aqui */}
										<div className='post_content'>
											<p>
												É presente em nossa cultura crer que{" "}
												<a
													uk-tooltip={openDict("investimento")}
													className={`${artigoStyles.dictLink}`}
												>
													investimentos
												</a>{" "}
												em imóveis são os melhores que uma pessoa pode fazer,
												principalmente por sua valorização ao longo do tempo e a
												possibilidade de se ter um rendimento mensal proveniente
												do seu aluguel. Sobre isso não há muito o que se
												discordar. Terreno é um produto finito, enquanto isso a
												população cresce vertiginosamente e precisa ocupar essa
												terra para viver.
											</p>
											<p>
												No outro lado da moeda, ter um imóvel próprios tem os
												seus riscos. Se você adquire um apartamento e busca ter
												uma renda alternativa ao alugá-lo, pode ser que este
												imóvel fique muito tempo sem um inquilino e, durante
												este período de{" "}
												<a
													uk-tooltip={openDict("vacância")}
													className={`${artigoStyles.dictLink}`}
												>
													vacância
												</a>
												, quem deve pagar os custos de reformas, consertos e
												impostos é o dono do imóvel que, neste caso, é você.
												Também é arriscado que o seu apartamento fique trocando
												continuamente de inquilinos e que estes não cuidem muito
												bem do seu imóvel.
											</p>
											<p>
												Hoje é possível investirmos em uma modalidade de
												investimentos relacionada à imóveis, os Fundos de
												Investimentos Imobiliários, FIIs. Lembra da dor de
												cabeça citada acima, ela não existe para quem investe em
												FIIs. Nesta modalidade, os gestores dos fundos que
												cuidam do imóvel, dos contratos, do pagamento de
												impostos e demais burocracias. São eles que controlam as
												negociações de venda e aluguel e, cobrando uma taxa
												anual de administração que gira em torno de 2% do lucro
												obtido, distribuem o restante dos lucros mensalmente
												entre os sócios desse fundo, que são os cotistas que
												adquiriram essa participação ao investir em FIIs.
											</p>
											<p>
												<img
													className='wp-image-4861 alignleft'
													src={post.images[1]}
													alt=''
													width='258'
													height='323'
												/>
												É como se um imóvel fosse dividido em várias partes e
												você pudesse comprar ou vender cada uma dessas partes.
												Essas partes são chamadas de cotas.
											</p>

											<p>
												Quando você decide investir em um{" "}
												<a
													uk-tooltip={openDict("fundos imobiliários/fii")}
													className={`${artigoStyles.dictLink}`}
												>
													FII
												</a>{" "}
												e compra algumas cotas, você passa a receber um valor em
												aluguel dos inquilinos desse fundo. Esse valor é
												proporcional à quantidade de cotas que você comprou e
												esse aluguel vem todo mês, do mesmo jeito que um imóvel
												seu que você coloque para alugar.
											</p>

											<p>
												Mas, vale lembra que o investimento em FII é um
												investimento em{" "}
												<a
													uk-tooltip={openDict("renda variável")}
													className={`${artigoStyles.dictLink}`}
												>
													renda variável
												</a>{" "}
												e está exposto às oscilações do mercado. Então comprando
												ou vendendo cotas de um fundo você vai estar sujeito ao
												valor de mercado desse fundo naquele dia, que é
												estabelecido pelas dezenas de pessoas que estão
												comprando e vendendo as suas cotas naquela hora. Esse
												valor varia ao longo do dia, dos meses e anos.{" "}
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
	const post = posts[6];

	return {
		post,
		posts,
		dicionario,
	};
};

export default Post;
