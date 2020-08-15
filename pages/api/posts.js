import posts from './posts.json'

export default (req, res) => {
  // let data = [];
  // if (req.params.id) {
  //   let id = req.params.id;
  //   posts.map(post => {
  //     if (post.id === id) {
  //       console.log(post)
  //       data = post;
  //     }
  //   })
  // } else {
  //   data = posts;
  // }
  // res.status(200).json(data);
  res.status(200).json(posts);
}