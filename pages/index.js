import React from "react";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("./components/layout"));
const HomeComponent = dynamic(() => import("./home"));

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/posts");
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home(props) {
  const { posts } = props;

  return (
    <LayoutComponent>
      {/* <Head>
				<title>{siteTitle}</title>
			</Head> */}
      <HomeComponent posts={posts} />
    </LayoutComponent>
  );
}
