import { Link } from "react-router-dom";
import { articles } from "../data/articles";


export default function Sidebar() {
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

      </nav>
    </aside>
  );
}