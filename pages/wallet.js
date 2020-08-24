import dynamic from "next/dynamic";

const MainWallet = dynamic(() => import("./components/wallet/main-wallet"));

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/posts");
  const posts = await data.json();
  return {
    props: {
      posts,
    },
  };
}

const Wallet = (props) => {
  const { posts } = props;

  return (
    <section>
      <div>
        <MainWallet />
      </div>
    </section>
  );
};

export default Wallet;
