import Link from "next/Link";

const PostHashs = (props) => {
  const { hashtags } = props;

  return (
    <div className="tag-cat">
      <ul className="single_post_tag_layout">
        {
          hashtags &&
          hashtags.map((hashtag) => (
            <li key={hashtag}>
              <Link href={`/dicionario-do-investidor?term=${hashtag}`}>
                <a rel="tag">{hashtag}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PostHashs;