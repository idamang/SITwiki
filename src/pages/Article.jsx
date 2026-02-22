import { useParams } from "react-router-dom";
import ArticleContent from "../components/ArticleContent";
import ArticleHeader from "../components/ArticleHeader";
import EditButton from "../components/EditArticle";
import { articles } from "../data/articles";

export default function Article() {
  const { id } = useParams();

  const article = articles.find(a => a.id === id);

  if (!article) {
    return <h2>Fant ikke artikkel</h2>;
  }

  return (
    <div className="article-page">
      <ArticleHeader
        title={article.title}
        lastEdited={article.lastEdited}
        editor={article.editor}
      />

      <EditButton />

      <ArticleContent content={article.content} />
    </div>
  );
}