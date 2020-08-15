import dynamic from "next/dynamic";
import { useState } from "react";
// import Head from "next/head";
// import fetch from "isomorphic-unfetch";

import dicionarioStyles from "./dicionario-do-investidor.module.scss";
const LayoutComponent = dynamic(() => import("./components/layout"));

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/dicionario");
  const dicionario = await data.json();

  return {
    props: {
      dicionario,
    },
  };
}

const DicionarioDoInvestidor = (props) => {
  const { dicionario } = props;

  const [termos, setTermos] = useState(dicionario);
  const [termoTitle, setTermoTitle] = useState(
    "Desmitificando todos os termos do mercado financeiro"
  );
  const [mainContent, setMainContent] = useState("Selecione um termo ao lado");
  const [secondaryContent, setSecondaryContent] = useState("");

  const handleClick = (termo) => {
    let title = termo.termo;
    let main = termo.conteudo[0];
    let secondary = termo.conteudo.slice(1, termo.conteudo.length);
    setTermoTitle(title);
    setMainContent(main);
    setSecondaryContent(secondary);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 8) {
      setTermos(dicionario);
    } else {
      let termos = dicionario;
      let value = event.target.value;
      if (value !== "") {
        let filteredTermos = termos.filter((termoLoop) => {
          let termoName = normalizeText(termoLoop.termo);
          return termoName.indexOf(normalizeText(value)) !== -1;
        });
        setTermos(filteredTermos);
      }
    }
  };

  const normalizeText = (texto) => {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  return (
    <LayoutComponent>
      {/* <Head>
				<title>{siteTitle} - Dicionário das Finanças</title>
			</Head> */}
      <div className="jl_single_style8">
        <div
          className="single_captions_aboves_image_full_width_wrapper"
          style={{ marginBottom: "30px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <section
                  className={`${dicionarioStyles.dicionarioWrapper} row`}
                >
                  <div
                    className={`${dicionarioStyles.dicionarioList} col-md-6 `}
                  >
                    <form
                      className="uk-search uk-search-default"
                      style={{ width: "100%" }}
                    >
                      <span uk-search-icon="true"></span>
                      <input
                        className="uk-search-input"
                        type="search"
                        placeholder="Buscar..."
                        onKeyDown={(e) => onKeyDown(e)}
                      />
                    </form>
                    <ul className="uk-list">
                      {termos &&
                        termos.map((termo) => (
                          <li key={termo.termo}>
                            <a
                              key={termo.termo}
                              onClick={() => handleClick(termo)}
                            >
                              {termo.termo}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div
                    className={`${dicionarioStyles.dicionarioDefinicao} col-md-6`}
                  >
                    <div className={`${dicionarioStyles.definicaoTop}`}>
                      <h1>{termoTitle}</h1>
                      <span className={`${dicionarioStyles.mainInfo}`}>
                        {mainContent}
                      </span>
                      {secondaryContent &&
                        secondaryContent.map((content) => (
                          <span
                            key={content}
                            className={`${dicionarioStyles.secondaryInfo}`}
                          >
                            {content}
                          </span>
                        ))}
                    </div>
                    {/* <div className={`${dicionarioStyles.definicaoLinks}`}>
                      <button>artigos/como-criar-valor</button>
                      <button>artigos/como-criar-valor</button>
                    </div> */}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default DicionarioDoInvestidor;
