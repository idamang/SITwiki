import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Article from "./pages/Article";
import Home from "./pages/Home";

import CreateArticle from "./pages/createArticle";
export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/new" element={<CreateArticle />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}