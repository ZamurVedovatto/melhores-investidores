import dynamic from "next/dynamic";

const homeStyles = dynamic(() => import("./home.module.scss"));
const HeroSectionComponent = dynamic(() =>
  import("./components/home/hero-section")
);
const LatestArticlesComponent = dynamic(() =>
  import("./components/home/latest-articles")
);

// import Servers from "./../constants/servers";
// const api = Servers.api;

const Home = (props) => {
  const { posts } = props;

  return (
    <section className={homeStyles.sectionHome}>
      <div className="jl_home_section">
        <div
          className="container"
          style={{ clear: "both", paddingTop: "50px", paddingBottom: "0px" }}
        >
          <HeroSectionComponent posts={posts} />
          <LatestArticlesComponent posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default Home;
