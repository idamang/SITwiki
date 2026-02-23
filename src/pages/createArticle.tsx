import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  async function handleCreate() {
    const id = slugify(title);

    const { error } = await supabase.from("articles").insert({
      id,
      title,
      content,
      updated_by: "bruker",
      updated_at: new Date().toISOString(),
    });

    if (!error) {
      navigate(`/article/${id}`);
    } else {
      console.error(error);
      alert("Kunne ikke lage artikkel");
    }
  }

  return (
    <div className="create-container">
      <h1 className="create-title">Ny artikkel</h1>

      <div className="create-field">
        <label className="create-label">Tittel</label>
        <input
          className="create-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="create-field">
        <label className="create-label">Innhold</label>
        <textarea
          className="create-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className="create-btn" onClick={handleCreate}>
        Opprett artikkel
      </button>
    </div>
  );
}
