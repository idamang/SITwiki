export default function ArticleContent({ content }) {
  return (
    <div className="article-content">
      <pre>{content}</pre>
    </div>
  );
}