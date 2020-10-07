// import PostSidebarSocialMedia from "./PostSidebarSocialMedia";
// import PostSidebarCategories from "./PostSidebarCategories";
import PostSidebarPosts from "./PostSidebarPosts";

const PostSidebar = (props) => {
  const { posts } = props;

  return (
    <>
    {/* {
      posts &&
      <PostSidebarCategories posts={posts} />
    } */}
    {
      posts &&
      <PostSidebarPosts posts={posts.reverse().slice(0,4)} />
    }
    </>
  )
}

export default PostSidebar;