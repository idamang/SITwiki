import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleCard, SearchBar, TitleSection } from "../components";
import { articles } from "../data/articles";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const threeFirstArticles = articles.slice(0, 3);

  return (
    <div className="page">
      <h1>SITWiki</h1>
      <p>Velkommen til kunnskapsbasen</p>

      <SearchBar value={query} onChange={setQuery} />

      <TitleSection>Sist redigert</TitleSection>

      {threeFirstArticles.map(article => (
        <ArticleCard
          key={article.id}
          title={article.title}
          updated={article.lastEdited}
          onClick={() => navigate(`/article/${article.id}`)}
        />
      ))}
    </div>
  );
}