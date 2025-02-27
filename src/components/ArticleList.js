import React from "react";
import Article from "./Article";

function ArticleList({ posts}) {
  const theArticles = posts.map((post) => (
    <Article 
    key={post.id}
    date={post.date}
    preview={post.preview}
    title={post.title}
    minutes={post.minutes}
    />
  ));
  return <main>{theArticles}</main>;
}

export default ArticleList;
