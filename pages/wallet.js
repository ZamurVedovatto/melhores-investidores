import dynamic from "next/dynamic";
const MainWallet = dynamic(() => import("./components/wallet/main-wallet"));
const API_KEY = "CGS6AIUGH79BZT5V";

export async function getStaticProps() {
  const data = await fetch(`http://localhost:8000/active`);
  const stocks = await data.json();
  return {
    props: {
      stocks,
    },
  };
}

const Wallet = (props) => {
  const { stocks } = props;
  return (
    <section>
      <div>
        <MainWallet stocks={stocks} />
      </div>
    </section>
  );
};

export default Wallet;
