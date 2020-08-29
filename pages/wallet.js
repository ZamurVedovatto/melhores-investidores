import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import axios from "axios";
const MainWallet = dynamic(() => import("./components/wallet/main-wallet"));

// export async function getStaticProps() {
//   const data = await fetch(`http://localhost:8000/active`);
//   const stocks = await data.json();
//   return {
//     props: {
//       stocks,
//     },
//   };
// }

const Wallet = () => {
  const [stocks, setStocks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(async () => {
    async function fetchData() {
      await axios
        .get(`http://localhost:8000/user/5f4a9e5d7c89ead7c4c61b52`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios.get(`http://localhost:8000/active`).then((res) => {
        console.log(res);
        setStocks(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <section>
      <div>
        <MainWallet user={user} stocks={stocks} />
      </div>
    </section>
  );
};

export default Wallet;
