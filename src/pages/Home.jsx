import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleCard, SearchBar, TitleSection } from "../components";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadArticles() {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("updated_at", { ascending: false });

      if (error) {
        console.error("DB error:", error);
      } else {
        setArticles(data);
      }
    }

    loadArticles();
  }, []);

  const threeFirstArticles = articles.slice(0, 3);
console.log("ARTICLES STATE:", articles);
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
          updated={article.updated_at}
          onClick={() => navigate(`/article/${article.id}`)}
        />
      ))}
    </div>
  );
}