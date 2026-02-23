import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Sidebar() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const { data, error } = await supabase
        .from("articles")
        .select("id, title")
        .order("title");

      if (!error) setArticles(data);
      else console.error(error);
    }

    loadArticles();
  }, []);

  return (
    <aside className="sidebar">
      <nav>

        <p className="sidebar-title">Navigasjon</p>
        <Link to="/" className="nav-link">Hjem</Link>

        <p className="sidebar-title">Artikler</p>

        {articles.map(a => (
          <Link
            key={a.id}
            to={`/article/${a.id}`}
            className="nav-link"
          >
            {a.title}
          </Link>
        ))}
        <Link to="/new" className="nav-link">+ Ny artikkel</Link>

      </nav>
    </aside>
  );
}