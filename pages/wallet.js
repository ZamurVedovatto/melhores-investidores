import dynamic from "next/dynamic";
const MainWallet = dynamic(() => import("./components/wallet/main-wallet"));
const API_KEY = "CGS6AIUGH79BZT5V";

export async function getStaticProps() {
  // const stocks = [
  //   "ITSA4.SAO",
  //   "BBDC4.SAO",
  //   "SAPR4.SAO",
  //   "MYPK3.SAO",
  //   "IRDM11.SAO",
  //   "VINO11.SAO",
  // ];

  const data = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=ITSA4.SAO&apikey=${API_KEY}`
  );
  console.log("data", data);
  const stocks = await data.json();
  console.log("stocks", stocks);
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
        <MainWallet />
      </div>
    </section>
  );
};

export default Wallet;
