import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleHeader from "../components/ArticleHeader";
import { supabase } from "../lib/supabase";

export default function Article() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    async function loadArticle() {
      const { data } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      setArticle(data);
      setText(data.content);
    }

    loadArticle();
  }, [id]);

  async function saveChanges() {
    const { error } = await supabase
      .from("articles")
      .update({
        content: text,
        updated_at: new Date().toISOString()
      })
      .eq("id", id);

    if (!error) {
      setArticle(prev => ({
        ...prev,
        content: text,
        updated_at: new Date().toISOString()
      }));
      setIsEditing(false);
    } else {
      console.error(error);
    }
  }

  if (!article) return <p>Laster artikkel...</p>;

  return (
    <div className="article-page">

      <ArticleHeader
        title={article.title}
        lastEdited={article.updated_at}
        editor={article.updated_by}
      />

      {isEditing ? (
        <button onClick={saveChanges}>Lagre</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Rediger</button>
      )}

      {isEditing ? (
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          className="editor"
        />
      ) : (
        <div className="article-content">{article.content}</div>
      )}

    </div>
  );
}