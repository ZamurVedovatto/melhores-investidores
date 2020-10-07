// import literaturaStyles from "./literatura.module.scss";
import dynamic from "next/dynamic";
const LayoutComponent = dynamic(() => import("./components/layout"));
const CardLivroComponent = dynamic(() =>
  import("./components/livros/CardLivro")
);
// import Head from "next/head";

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/livros");
  const livros = await data.json();
  return {
    props: {
      livros,
    },
  };
}

const LiteraturaMain = (props) => {
  const { livros } = props;
  return (
    <LayoutComponent>
      {/* <Head>
				<title>{siteTitle} - Literatura</title>
			</Head> */}
      <div
        className="row"
        style={{
          margin: "0 auto",
          maxWidth: "1040px",
          width: "100%",
          padding: "2rem 0",
        }}
      >
        <div className="livrosintro-content col-12">
          <div className="row" style={{ padding: "0 1rem" }}>
            {livros.map((livro) => (
              <div className="col-sm-12 col-md-4 col-lg-3" key={livro.id}>
                <CardLivroComponent livro={livro} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default LiteraturaMain;
