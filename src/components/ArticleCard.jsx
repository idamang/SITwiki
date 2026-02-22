export default function ArticleCard({ title, updated, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <span>{updated}</span>
    </div>
  );
}