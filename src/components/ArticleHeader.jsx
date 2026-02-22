export default function ArticleHeader({ title, lastEdited, editor }) {
  return (
    <header className="article-header">
      <h1>{title}</h1>
      <p className="article-meta">
        Sist redigert {lastEdited} av {editor}
      </p>
    </header>
  );
}