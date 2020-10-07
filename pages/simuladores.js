import dynamic from "next/dynamic";
const LayoutComponent = dynamic(() => import("./components/layout"));
const DyCalculation = dynamic(() =>
  import("./components/dy-calculation/DyCalculation")
);

const SimuladoresMain = () => {

  return (
    <LayoutComponent>
      {/* <Head>
				<title>{siteTitle} - Literatura</title>
			</Head> */}
      <div className="row" style={{ margin: "0 auto", maxWidth: "1040px", width: "100%", padding: "2rem 0" }}>
        <div className="col-12">
          <DyCalculation />
        </div>
        <div className="col-12" style={{ marginTop: "2rem"}}>
          <span>Em breve: Simulador de Dividendos</span>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default SimuladoresMain;
